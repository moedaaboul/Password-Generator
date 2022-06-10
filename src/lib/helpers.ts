import { special, numbers, lowerChars, upperChars } from "./data.js";


// Generates random number based on any array length using the Array as an input
export const randomNumberFromArray = (array: Array<any>) : number => {
    const random = Math.floor(Math.random() * array.length);
    return random;
  };
  
  // Global function to push ALL selected character types to the selectionArray
export const pushAllToSelectedArray = (char: Array<any>, selectionArray: Array<any>): void => {
    char.forEach((element) => {
      selectionArray.push(element);
    });
  };
  
  // Global function to push SINGLE random selections from any defined Array Character Type (Also takes any array)
export const pushRandomToPasswordArray = (charType: Array<any>, passwordArray: Array<any>): void => {
    passwordArray.push(charType[randomNumberFromArray(charType)]);
  };
  
  // Main function to generate password
export const generatePassword = () : string | null => {
    let selectionArray: Array<any> = [];
  
    // enables number of password characters input via a prompt
    let selectedPasswordLength: any = prompt(
      "How many characters would you like your password to contain?"
    );
  
    var isNumber: boolean = parseInt(selectedPasswordLength) == selectedPasswordLength; 
  
    // enables alert prompts for too short or too long passwords
    if (selectedPasswordLength < 8) {
      alert("Password is too short.");
      return null;
    } else if (selectedPasswordLength > 128) {
      alert("Password is too long!");
      return null;
    } else if (!isNumber){
      alert("A number should be selected!");
      return null;
    }
  
    // create empty password array
    let password: Array<string> = [];
  
    // prompt message for special character selection
    if (confirm("Click OK to confirm including special characters")) {
      pushAllToSelectedArray(special, selectionArray);
      pushRandomToPasswordArray(special, password);
    }
  
    // prompt message for number character selection
    if (confirm("Click OK to confirm including numeric characters")) {
      pushAllToSelectedArray(numbers, selectionArray);
      pushRandomToPasswordArray(numbers, password);
    }
  
    // prompt message for lower characters selection
    if (confirm("Click OK to confirm including lowercase characters")) {
      pushAllToSelectedArray(lowerChars, selectionArray);
      pushRandomToPasswordArray(lowerChars, password);
    }
  
    // prompt message for caps characters selection
    if (confirm("Click OK to confirm including uppercase characters")) {
      pushAllToSelectedArray(upperChars, selectionArray);
      pushRandomToPasswordArray(upperChars, password);
    }
  
    // Creates alert and terminates upon no character type selection
    if (selectionArray.length === 0) {
      alert("At least one character types needs to be selected.");
      return null;
    }
  
    // Store number of selections for last reshuffling step
    const selections = password.length;
  
    // Adjust characters to take on remaining characters needed
    selectedPasswordLength -= password.length;
  
    //Push random selection to meet initial character selection length
    for (var i = 0; i < selectedPasswordLength; i++) {
      pushRandomToPasswordArray(selectionArray, password);
    }
  
    // Finally shuffle initial single pushed values only as other indices have already been randomized
    for (var i = 0; i <= selections - 1; i++) {
      const randomIndex = randomNumberFromArray(password);
      [password[i], password[randomIndex]] = [password[randomIndex], password[i]];
    }
  
    // Use join method to convert the Password Array to a string and return
    return password.join("");
  };
  