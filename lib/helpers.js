import { special, numbers, lowerChars, upperChars } from "./data.js";
export const randomNumberFromArray = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return random;
};
export const pushAllToSelectedArray = (char, selectionArray) => {
    char.forEach((element) => {
        selectionArray.push(element);
    });
};
export const pushRandomToPasswordArray = (charType, passwordArray) => {
    passwordArray.push(charType[randomNumberFromArray(charType)]);
};
export const generatePassword = () => {
    let selectionArray = [];
    let selectedPasswordLength = prompt("How many characters would you like your password to contain?");
    var isNumber = parseInt(selectedPasswordLength) == selectedPasswordLength;
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
    let password = [];
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
    const selections = password.length;
    selectedPasswordLength -= password.length;
    for (var i = 0; i < selectedPasswordLength; i++) {
        pushRandomToPasswordArray(selectionArray, password);
    }
    for (var i = 0; i <= selections - 1; i++) {
        const randomIndex = randomNumberFromArray(password);
        [password[i], password[randomIndex]] = [password[randomIndex], password[i]];
    }
    return password.join("");
};
