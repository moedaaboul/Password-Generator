import { generatePassword } from "./helpers.js";
const generateBtn = document.querySelector("#generate");
const writePassword = () => {
    const password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
};
generateBtn.addEventListener("click", writePassword);
