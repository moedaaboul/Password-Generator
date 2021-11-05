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

let numbers = [0, 1 , 2, 3 , 4, 5, 6, 7, 8, 9];
let upperChars = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerChars = upperChars.map(letters => letters.toLowerCase());
let special = ['!', '@', '#', '%', '^', '$','£','&','+','=','-','.','{','}'];

let randomNumber = (anyArray) => {
  random = Math.floor(Math.random() * anyArray.length);
  return random;
};

const pushToSelectedChars = (char, selectionArray) => char.forEach((element) => {
  selectionArray.push(element);
  });


let generatePassword = () => {

let selectionArray = [];

let criteria = {
  special: true,
  numeric: true,
  lowercase: true,
  uppercase: true,
};

let characters = prompt("How many characters would you like your password to contain?");

if (characters < 8 ) {
  alert('Password is too short.');
  return null;
} else if (characters > 128) {
  alert('Password is too long!');
  return null;
};

if (confirm("Click OK to confirm including special characters")) {
     criteria.special = true;
     pushToSelectedChars(special, selectionArray);
    } else {
  criteria.special = false;
};

if (confirm("Click OK to confirm including numeric characters") == true) {
  criteria.numeric = true;
  pushToSelectedChars(numbers, selectionArray);
} else {
  criteria.numeric = false;
};

if (confirm("Click OK to confirm including lowercase characters") == true) {
  criteria.lowercase = true;
  pushToSelectedChars(lowerChars, selectionArray);
} else {
  criteria.lowercase = false;
};

if (confirm("Click OK to confirm including uppercase characters") == true) {
  criteria.uppercase = true;
  pushToSelectedChars(upperChars, selectionArray);
} else {
  criteria.uppercase = false;
};


let password = [];
  
for(var i = 0; i < characters; i++) {
  password.push(selectionArray[randomNumber(selectionArray)]);   
};

return password.join('');

}


