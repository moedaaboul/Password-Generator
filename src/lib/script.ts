import { generatePassword } from "./helpers.js";

// Assign variable to the generate button
 const generateBtn = document.querySelector("#generate")!;

// Write password to the #password input
 const writePassword = () => {
  const password = generatePassword();
  let passwordText = document.querySelector("#password") as HTMLInputElement;
  passwordText.value = password!; // non-null assertion
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


