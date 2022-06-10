# Password Generator

> Password Generator
> Live demo [_here_](https://moedaaboul.github.io/password-generator/).

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Appearance](#appearance)
- [Setup](#setup)
- [Getting Started](#getting-started)
- [TypeScript](#typescript)
- [Project Status](#project-status)
- [Contact](#contact)
- [License](#license)

## General Information

This is a password generator that I originally built using JavaScript, which I later refactored to TypeScript.

This web application has the following functionality:

- A prompt is generated upon clicking the `Generate Password` button for the length of the password.
- Length validation check enabled to ensure at least 8 characters and no more than 128 characters. User is presented with a prompt message that password is either too short or too long.
- A series of prompts asking for password criteria to include whether or not to include lowercase, uppercase, numeric and/or special characters.
- Input are validated and at least one character type should be selected by the user.
- Password is finally presented to the page inside the `textarea`

## Technologies used

- HTML
- CSS
- JavaScript
- TypeScript

## Appearance

The following image depicts the functionality of the webpage:

![The password generator includes a generator button and and a text box for displaying the password upon click.](./images/demo.png)

## Setup

- Text editor (VS Code recommended)
- An Internet browser (Google Chrome recommended)

## Getting Started

To make changes, modify `TypeScript` files located inside of the `src` directory.

To compile file to JavaScript, run the following command in your terminal:

```
npx tsc
```

## TypeScript

I have particularly found imports counter-intuitive in TypeScript as you'd suppose imports to be specified via a `*.ts` extension. However, it is actually done through `*.js`. This is because we are compiling to JavaScript and the Browser will be importing a JavaScript file rather than a TypeScript one.

Additionally, within the `tsconfig.json` compiler options I've amended the `target` and `module` property values to enable module imports as follows:

```json
{
  "compilerOptions": {
    "target": "es6", // just targeting modern browsers
    "module": "es2015" // this is the regular ECMAScript 2015 of the module system
    //...
  }
}
```

## Project Status

Project is: _complete_.

## Contact

Created by [@moedaaboul](https://github.com/moedaaboul) - feel free to contact me!

## License

This work is licensed under
[MIT](https://github.com/moedaaboul/Password-Generator/blob/main/LICENSE).
