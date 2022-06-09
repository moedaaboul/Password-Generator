"use strict";
var generateBtn = document.querySelector("#generate");
var writePassword = function () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};
generateBtn.addEventListener("click", writePassword);
var numbers = [];
var upperChars = [];
var lowerChars = [];
var createArrayFromCharCodes = function (startCharCode, endCharCode, array) {
    for (var i = startCharCode; i <= endCharCode; i++) {
        array.push(String.fromCharCode(i));
    }
};
createArrayFromCharCodes(48, 57, numbers);
createArrayFromCharCodes(65, 90, upperChars);
createArrayFromCharCodes(97, 122, lowerChars);
var special = [
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
var randomNumberFromArray = function (array) {
    var random = Math.floor(Math.random() * array.length);
    return random;
};
var pushAllToSelectedArray = function (char, selectionArray) {
    char.forEach(function (element) {
        selectionArray.push(element);
    });
};
var pushRandomToPasswordArray = function (charType, passwordArray) {
    passwordArray.push(charType[randomNumberFromArray(charType)]);
};
var generatePassword = function () {
    var _a;
    var selectionArray = [];
    var selectedPasswordLength = prompt("How many characters would you like your password to contain?");
    var isNumber = parseInt(selectedPasswordLength) == selectedPasswordLength;
    console.log(typeof selectedPasswordLength);
    if (selectedPasswordLength < 8) {
        alert("Password is too short.");
        return null;
    }
    else if (selectedPasswordLength > 128) {
        alert("Password is too long!");
        return null;
    }
    else if (!isNumber) {
        alert("A number should be selected!");
        return null;
    }
    var password = [];
    if (confirm("Click OK to confirm including special characters")) {
        pushAllToSelectedArray(special, selectionArray);
        pushRandomToPasswordArray(special, password);
    }
    if (confirm("Click OK to confirm including numeric characters")) {
        pushAllToSelectedArray(numbers, selectionArray);
        pushRandomToPasswordArray(numbers, password);
    }
    if (confirm("Click OK to confirm including lowercase characters")) {
        pushAllToSelectedArray(lowerChars, selectionArray);
        pushRandomToPasswordArray(lowerChars, password);
    }
    if (confirm("Click OK to confirm including uppercase characters")) {
        pushAllToSelectedArray(upperChars, selectionArray);
        pushRandomToPasswordArray(upperChars, password);
    }
    if (selectionArray.length === 0) {
        alert("At least one character types needs to be selected.");
        return null;
    }
    var selections = password.length;
    selectedPasswordLength -= password.length;
    for (var i = 0; i < selectedPasswordLength; i++) {
        pushRandomToPasswordArray(selectionArray, password);
    }
    for (var i = 0; i <= selections - 1; i++) {
        var randomIndex = randomNumberFromArray(password);
        _a = [password[randomIndex], password[i]], password[i] = _a[0], password[randomIndex] = _a[1];
    }
    return password.join("");
};
