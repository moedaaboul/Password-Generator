// Assign variable to the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
let writePassword = () => {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create empty arrays for character type selections
let numbers = [];
let upperChars = [];
let lowerChars = [];

// Global function added to create array from given CharCode start and end codes
let PushFromCharCodes = (startCharCode, endCharCode, ArrayType) => {
  for (let i = startCharCode; i <= endCharCode; i++) {
    ArrayType.push(String.fromCharCode(i));
  }
};

// Create numbers array from 0 to 9
PushFromCharCodes(48, 57, numbers);
// Conversely could replace with: let numbers = [0, 1 , 2, 3 , 4, 5, 6, 7, 8, 9];

// Create upper characters array from A to Z
PushFromCharCodes(65, 90, upperChars);
// Conversely could replace with: let upperChars = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Create lower characters array from a to z
PushFromCharCodes(97, 122, lowerChars);
// Conversely could replace with: const lowerChars = upperChars.map(letters => letters.toLowerCase());

// Create special character array
let special = [
  "!",
  "@",
  "#",
  "%",
  "^",
  "$",
  "£",
  "&",
  "+",
  "=",
  "-",
  ".",
  "{",
  "}",
];

// Generates random number based on any array length using the Array as an input
let randomNumber = (anyArray) => {
  random = Math.floor(Math.random() * anyArray.length);
  return random;
};

// Global function to push ALL selected character types to the selectionArray
const pushAllToSelectedArray = (char, selectionArray) =>
  char.forEach((element) => {
    selectionArray.push(element);
  });

// Global function to push SINGLE random selections from any defined Array Character Type (Also takes any array)
const pushRandomToPasswordArray = (charType, passwordArray) => {
  passwordArray.push(charType[randomNumber(charType)]);
};

// Main function to generate password
let generatePassword = () => {
  let selectionArray = [];

  // enables number of password characters input via a prompt
  let characters = prompt(
    "How many characters would you like your password to contain?"
  );

  // enables alert prompts for too short or too long passwords
  if (characters < 8) {
    alert("Password is too short.");
    return null;
  } else if (characters > 128) {
    alert("Password is too long!");
    return null;
  }

  // create empty password array
  let password = [];

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

  // Adjust characters to take on remaining characters needed
  selections = password.length;
  characters -= password.length;

  //Push random selection to meet initial character selection length
  for (var i = 0; i < characters; i++) {
    pushRandomToPasswordArray(selectionArray, password);
  }

  // Finally shuffle initial single pushed values only as other indices have already been randomized
  for (var i = 0; i <= selections - 1; i++) {
    randomIndex = randomNumber(password);
    [password[i], password[randomIndex]] = [password[randomIndex], password[i]];
  }

  // Use join method to convert the Password Array to a string and return
  return password.join("");
};
