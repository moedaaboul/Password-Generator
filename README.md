# Password Generator

> Password Generator
> Live demo [_here_](https://moedaaboul.github.io/Password-Generator/).

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Appearance](#appearance)
- [Setup](#setup)
- [Getting Started](#getting-started)
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

## Project Status

Project is: _complete_.

## Contact

Created by [@moedaaboul](https://github.com/moedaaboul) - feel free to contact me!

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

Shield: [![CC BY 4.0][cc-by-shield]][cc-by]
<br><br>
[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
