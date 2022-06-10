export let numbers = [];
export let upperChars = [];
export let lowerChars = [];
export const createArrayFromCharCodes = (startCharCode, endCharCode, array) => {
    for (let i = startCharCode; i <= endCharCode; i++) {
        array.push(String.fromCharCode(i));
    }
};
createArrayFromCharCodes(48, 57, numbers);
createArrayFromCharCodes(65, 90, upperChars);
createArrayFromCharCodes(97, 122, lowerChars);
export const special = [
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
