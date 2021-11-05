// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
let writePassword = () => {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create empty arrays for character type selections
let numbers = [];
let upperChars = [];
let lowerChars = [];

// Global function added to create array from given CharCode start and end codes
let GenerateArrayfromCharCode = (startCharCode, endCharCode, ArrayType) => {
for (let i = startCharCode; i <= endCharCode; i++) {
 ArrayType.push(String.fromCharCode(i))
}
}

// Create numbers array from 0 to 9
GenerateArrayfromCharCode(48, 57, numbers)
// Conversely could replace with: let numbers = [0, 1 , 2, 3 , 4, 5, 6, 7, 8, 9];

// Create upper characters array from A to Z
GenerateArrayfromCharCode(65, 90, upperChars)
// Conversely could replace with: let upperChars = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Create lower characters array from a to z
GenerateArrayfromCharCode(97, 122, lowerChars)
// Conversely could replace with: const lowerChars = upperChars.map(letters => letters.toLowerCase());

// Create special character array
let special = ['!', '@', '#', '%', '^', '$','£','&','+','=','-','.','{','}'];

// Generates random number based on any array length using the Array as an input
let randomNumber = (anyArray) => {
  random = Math.floor(Math.random() * anyArray.length);
  return random;
};

// Global function to push selected character types to the selectionArray
const pushToSelectedChars = (char, selectionArray) => char.forEach((element) => {
  selectionArray.push(element);
  });

// Main function to generate password 
let generatePassword = () => {

let selectionArray = [];

// Create criteria object to store whether any of the 4 character types has been selected
// Set values to false (i.e. that no character type is selected)

let criteria = {
  special: false,
  numeric: false,
  lowercase: false,
  uppercase: false,
};

// enables character type selection via a prompt
let characters = prompt("How many characters would you like your password to contain?");

// enables alert prompts for too short or too long passwords
if (characters < 8 ) {
  alert('Password is too short.');
  return null;
} else if (characters > 128) {
  alert('Password is too long!');
  return null;
};

// prompt message for special character selection 
if (confirm("Click OK to confirm including special characters")) {
     criteria.special = true;
     pushToSelectedChars(special, selectionArray);
    };

// prompt message for number character selection 
if (confirm("Click OK to confirm including numeric characters") == true) {
  criteria.numeric = true;
  pushToSelectedChars(numbers, selectionArray);
};

// prompt message for lower characters selection 
if (confirm("Click OK to confirm including lowercase characters") == true) {
  criteria.lowercase = true;
  pushToSelectedChars(lowerChars, selectionArray);
};

// prompt message for caps characters selection 
if (confirm("Click OK to confirm including uppercase characters") == true) {
  criteria.uppercase = true;
  pushToSelectedChars(upperChars, selectionArray);
};

// creates an empty array for final password output
let password = [];
  
for(var i = 0; i < characters; i++) {
  password.push(selectionArray[randomNumber(selectionArray)]);   
};

return password.join('');

}


