// Assignment Code
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
let GenerateArrayfromCharCode = (startCharCode, endCharCode, ArrayType) => {
  for (let i = startCharCode; i <= endCharCode; i++) {
    ArrayType.push(String.fromCharCode(i));
  }
};

// Create numbers array from 0 to 9
GenerateArrayfromCharCode(48, 57, numbers);
// Conversely could replace with: let numbers = [0, 1 , 2, 3 , 4, 5, 6, 7, 8, 9];

// Create upper characters array from A to Z
GenerateArrayfromCharCode(65, 90, upperChars);
// Conversely could replace with: let upperChars = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Create lower characters array from a to z
GenerateArrayfromCharCode(97, 122, lowerChars);
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

// Global function to push selected character types to the selectionArray
const pushToSelectedChars = (char, selectionArray) =>
  char.forEach((element) => {
    selectionArray.push(element);
  });

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

  let password = [];

  // prompt message for special character selection
  if (confirm("Click OK to confirm including special characters")) {
    pushToSelectedChars(special, selectionArray);
    password.push(special[randomNumber(special)]);
  }

  // prompt message for number character selection
  if (confirm("Click OK to confirm including numeric characters")) {
    pushToSelectedChars(numbers, selectionArray);
    password.push(numbers[randomNumber(numbers)]);
  }

  // prompt message for lower characters selection
  if (confirm("Click OK to confirm including lowercase characters")) {
    pushToSelectedChars(lowerChars, selectionArray);
    password.push(lowerChars[randomNumber(lowerChars)]);
  }

  // prompt message for caps characters selection
  if (confirm("Click OK to confirm including uppercase characters")) {
    pushToSelectedChars(upperChars, selectionArray);
    password.push(upperChars[randomNumber(upperChars)]);
  }

  // Creates alert and terminates upon no character type selection
  if (selectionArray.length === 0) {
    alert("At least one character types needs to be selected.");
    return null;
  }

  // Adjust characters to take on remaining characters needed
  characters -= password.length;

  for (var i = 0; i < characters; i++) {
    password.push(selectionArray[randomNumber(selectionArray)]);
  }

  // Finally shuffle array due to initial pushed values
  function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  // Call shuffle function on password array
  shuffle(password);
  console.log(password);

  console.log(password.some((v) => upperChars.includes(v)));
  console.log(password.some((v) => lowerChars.includes(v)));
  console.log(password.some((v) => special.includes(v)));
  console.log(password.some((v) => numbers.includes(v)));

  // shuffle PENDING

  return password.join("");
};
