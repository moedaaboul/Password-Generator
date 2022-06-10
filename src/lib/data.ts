// Create empty arrays for character type selections
export let numbers: Array<number> = [];
export let upperChars: Array<string> = [];
export let lowerChars: Array<string> = [];

// Global function added to create array from given CharCode start and end codes
export const createArrayFromCharCodes = (startCharCode: number, endCharCode: number, array: Array<any>) : void => {
  for (let i = startCharCode; i <= endCharCode; i++) {
    array.push(String.fromCharCode(i));
  }
};

// Create numbers array from 0 to 9
createArrayFromCharCodes(48, 57, numbers);

// Create upper characters array from A to Z
createArrayFromCharCodes(65, 90, upperChars);

// Create lower characters array from a to z
createArrayFromCharCodes(97, 122, lowerChars);

// Create special character array
export const special: Array<string> = [
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