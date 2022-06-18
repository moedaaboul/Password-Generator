"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const path = require('path');
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..')));
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}....`);
});
require('chromedriver');
const { By, Builder, until, Capabilities } = require('selenium-webdriver');
const { expect } = require('chai');
var should = require('chai').should();
const myUrl = 'http://localhost:3000/';
let chromeCapabilities = Capabilities.chrome();
chromeCapabilities.set('goog:chromeOptions', {
    args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage'],
});
describe('Non-numeric inputs entered for number of password characters.', function () {
    it('Should be rejected', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('Selenium');
            yield alert.accept();
            let errorAlert = yield driver.switchTo().alert();
            let alertText = yield errorAlert.getText();
            alertText.should.equal('A number should be selected!');
            yield driver.quit();
            console.log(alertText);
        });
    });
});
describe('Less than 8 password characters have been entered', function () {
    it('Should prompt with a password is too short message', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('7');
            yield alert.accept();
            let errorAlert = yield driver.switchTo().alert();
            let alertText = yield errorAlert.getText();
            alertText.should.equal('Password is too short.');
            yield driver.quit();
        });
    });
});
describe('More than 128 password characters have been entered', function () {
    it('Should prompt with a password is too short message', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('129');
            yield alert.accept();
            let errorAlert = yield driver.switchTo().alert();
            let alertText = yield errorAlert.getText();
            alertText.should.equal('Password is too long!');
            yield driver.quit();
        });
    });
});
describe('Numeric characters only selected to generate password', function () {
    var onlyNumbers = /^[0-9]+$/;
    it('Should generate a password with only numeric characters', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('10');
            yield alert.accept();
            let specialCharactersSelection = yield driver.switchTo().alert();
            yield specialCharactersSelection.dismiss();
            let numericCharactersSelection = yield driver.switchTo().alert();
            yield numericCharactersSelection.accept();
            let lowerCaseCharactersSelection = yield driver.switchTo().alert();
            yield lowerCaseCharactersSelection.dismiss();
            let upperCaseCharactersSelection = yield driver.switchTo().alert();
            yield upperCaseCharactersSelection.dismiss();
            let password = yield driver
                .findElement(By.id('password'))
                .getAttribute('value');
            console.log('password: ', password);
            password = parseInt(password);
            expect(parseInt(password)).to.match(onlyNumbers);
            yield driver.quit();
        });
    });
});
describe('Only Letter characters selected to generate password', function () {
    var onlyLetters = /^[A-Za-z]+$/;
    it('Should generate a password with only letter characters', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('10');
            yield alert.accept();
            let specialCharactersSelection = yield driver.switchTo().alert();
            yield specialCharactersSelection.dismiss();
            let numericCharactersSelection = yield driver.switchTo().alert();
            yield numericCharactersSelection.dismiss();
            let lowerCaseCharactersSelection = yield driver.switchTo().alert();
            yield lowerCaseCharactersSelection.accept();
            let upperCaseCharactersSelection = yield driver.switchTo().alert();
            yield upperCaseCharactersSelection.accept();
            let password = yield driver
                .findElement(By.id('password'))
                .getAttribute('value');
            console.log('password: ', password);
            expect(password).to.match(onlyLetters);
            yield driver.quit();
        });
    });
});
describe('Only Mix of Letters and Numeric characters selected to generate password', function () {
    var onlyLettersAndNumeric = /^[A-Za-z0-9]+$/;
    it('Should generate a password with only letters and numeric characters', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('10');
            yield alert.accept();
            let specialCharactersSelection = yield driver.switchTo().alert();
            yield specialCharactersSelection.dismiss();
            let numericCharactersSelection = yield driver.switchTo().alert();
            yield numericCharactersSelection.accept();
            let lowerCaseCharactersSelection = yield driver.switchTo().alert();
            yield lowerCaseCharactersSelection.accept();
            let upperCaseCharactersSelection = yield driver.switchTo().alert();
            yield upperCaseCharactersSelection.accept();
            let password = yield driver
                .findElement(By.id('password'))
                .getAttribute('value');
            console.log('password: ', password);
            expect(password).to.match(onlyLettersAndNumeric);
            yield driver.quit();
        });
    });
});
describe('Only Lower Case Letter characters selected to generate password', function () {
    var onlyLowerCaseLetters = /^[a-z]+$/;
    it('Should generate a password with only lower case letter characters', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('10');
            yield alert.accept();
            let specialCharactersSelection = yield driver.switchTo().alert();
            yield specialCharactersSelection.dismiss();
            let numericCharactersSelection = yield driver.switchTo().alert();
            yield numericCharactersSelection.dismiss();
            let lowerCaseCharactersSelection = yield driver.switchTo().alert();
            yield lowerCaseCharactersSelection.accept();
            let upperCaseCharactersSelection = yield driver.switchTo().alert();
            yield upperCaseCharactersSelection.dismiss();
            let password = yield driver
                .findElement(By.id('password'))
                .getAttribute('value');
            console.log('password: ', password);
            expect(password).to.match(onlyLowerCaseLetters);
            yield driver.quit();
        });
    });
});
describe('Only Upper Case Letter characters selected to generate password', function () {
    var onlyUpperCaseLetters = /^[A-Z]+$/;
    it('Should generate a password with only lower case letter characters', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('10');
            yield alert.accept();
            let specialCharactersSelection = yield driver.switchTo().alert();
            yield specialCharactersSelection.dismiss();
            let numericCharactersSelection = yield driver.switchTo().alert();
            yield numericCharactersSelection.dismiss();
            let lowerCaseCharactersSelection = yield driver.switchTo().alert();
            yield lowerCaseCharactersSelection.dismiss();
            let upperCaseCharactersSelection = yield driver.switchTo().alert();
            yield upperCaseCharactersSelection.accept();
            let password = yield driver
                .findElement(By.id('password'))
                .getAttribute('value');
            console.log('password: ', password);
            expect(password).to.match(onlyUpperCaseLetters);
            yield driver.quit();
        });
    });
});
describe('Only Special Case characters selected to generate password', function () {
    var onlySpecialCaseCharacters = /^[!@#%^$£&+={}\.-]+$/;
    it('Should generate a password with only special case letter characters', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('10');
            yield alert.accept();
            let specialCharactersSelection = yield driver.switchTo().alert();
            yield specialCharactersSelection.accept();
            let numericCharactersSelection = yield driver.switchTo().alert();
            yield numericCharactersSelection.dismiss();
            let lowerCaseCharactersSelection = yield driver.switchTo().alert();
            yield lowerCaseCharactersSelection.dismiss();
            let upperCaseCharactersSelection = yield driver.switchTo().alert();
            yield upperCaseCharactersSelection.dismiss();
            let password = yield driver
                .findElement(By.id('password'))
                .getAttribute('value');
            console.log('password: ', password);
            expect(password).to.match(onlySpecialCaseCharacters);
            yield driver.quit();
        });
    });
});
describe('All Character Types selected to generate password', function () {
    var anyCharacterType = /^[A-Za-z0-9!@#%^$£&+={}\.-]+$/;
    it('Should generate a password with any character type', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('10');
            yield alert.accept();
            let specialCharactersSelection = yield driver.switchTo().alert();
            yield specialCharactersSelection.accept();
            let numericCharactersSelection = yield driver.switchTo().alert();
            yield numericCharactersSelection.accept();
            let lowerCaseCharactersSelection = yield driver.switchTo().alert();
            yield lowerCaseCharactersSelection.accept();
            let upperCaseCharactersSelection = yield driver.switchTo().alert();
            yield upperCaseCharactersSelection.accept();
            let password = yield driver
                .findElement(By.id('password'))
                .getAttribute('value');
            console.log('password: ', password);
            expect(password).to.match(anyCharacterType);
            yield driver.quit();
        });
    });
});
describe('No Character Type selected to generate password', function () {
    it('Should prompt a message with no character type being selected', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();
            yield driver.get(myUrl);
            yield driver.findElement(By.id('generate')).click();
            yield driver.wait(until.alertIsPresent());
            let alert = yield driver.switchTo().alert();
            yield alert.sendKeys('10');
            yield alert.accept();
            let specialCharactersSelection = yield driver.switchTo().alert();
            yield specialCharactersSelection.dismiss();
            let numericCharactersSelection = yield driver.switchTo().alert();
            yield numericCharactersSelection.dismiss();
            let lowerCaseCharactersSelection = yield driver.switchTo().alert();
            yield lowerCaseCharactersSelection.dismiss();
            let upperCaseCharactersSelection = yield driver.switchTo().alert();
            yield upperCaseCharactersSelection.dismiss();
            let errorAlert = yield driver.switchTo().alert();
            let alertText = yield errorAlert.getText();
            alertText.should.equal('At least one character types needs to be selected.');
            yield driver.quit();
        });
    });
});
