const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, console.log(`Server is listening on port ${PORT}....`));

require('chromedriver');
const { By, Builder, until, Capabilities } = require('selenium-webdriver');
const { expect } = require('chai');
var should = require('chai').should();
// describe block
const myUrl = 'http://localhost:3000/';

let chromeCapabilities = Capabilities.chrome();

//Setting chrome options
chromeCapabilities.set('goog:chromeOptions', {
  args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage'],
});

describe('Non-numeric inputs entered for number of password characters.', function () {
  // it block
  it('Should be rejected', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();

    // navigate to the application
    await driver.get(myUrl);

    // click on generate password btn
    await driver.findElement(By.id('generate')).click();

    // Wait for the alert to be displayed
    await driver.wait(until.alertIsPresent());

    // Store the alert in a variable
    let alert = await driver.switchTo().alert();

    //Type your message
    await alert.sendKeys('Selenium');

    //Press the OK button
    await alert.accept();

    // // Wait for the alert to be displayed
    // await driver.wait(until.alertIsPresent());

    // Store the new alert in a new variable
    let errorAlert = await driver.switchTo().alert();

    //Store the alert text in a variable
    let alertText = await errorAlert.getText();

    // assert using node assertion
    // assert.strictEqual(alertText, 'A number should be selected!');

    // assert using chai should
    alertText.should.equal('A number should be selected!');

    //close the browser
    await driver.quit();

    console.log(alertText);
  });
});

describe('Less than 8 password characters have been entered', function () {
  // it block
  it('Should prompt with a password is too short message', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
    await driver.get(myUrl);
    await driver.findElement(By.id('generate')).click();
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.sendKeys('7');
    await alert.accept();
    let errorAlert = await driver.switchTo().alert();
    let alertText = await errorAlert.getText();

    // assert using chai should
    alertText.should.equal('Password is too short.');

    //close the browser
    await driver.quit();
  });
});

describe('More than 128 password characters have been entered', function () {
  // it block
  it('Should prompt with a password is too short message', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
    await driver.get(myUrl);
    await driver.findElement(By.id('generate')).click();
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.sendKeys('129');
    await alert.accept();
    let errorAlert = await driver.switchTo().alert();
    let alertText = await errorAlert.getText();

    // assert using chai should
    alertText.should.equal('Password is too long!');
    await driver.quit();
  });
});

describe('Numeric characters only selected to generate password', function () {
  var onlyNumbers = /^[0-9]+$/;

  it('Should generate a password with only numeric characters', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
    await driver.get(myUrl);
    await driver.findElement(By.id('generate')).click();
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.sendKeys('10');
    await alert.accept();
    let specialCharactersSelection = await driver.switchTo().alert();
    await specialCharactersSelection.dismiss();
    let numericCharactersSelection = await driver.switchTo().alert();
    await numericCharactersSelection.accept();
    let lowerCaseCharactersSelection = await driver.switchTo().alert();
    await lowerCaseCharactersSelection.dismiss();
    let upperCaseCharactersSelection = await driver.switchTo().alert();
    await upperCaseCharactersSelection.dismiss();
    let password = await driver
      .findElement(By.id('password'))
      .getAttribute('value');
    console.log('password: ', password);
    password = parseInt(password);
    expect(parseInt(password)).to.match(onlyNumbers);
    // assert using chai should
    // alertText.should.equal('Password is too long!');
    await driver.quit();
  });
});

describe('Only Letter characters selected to generate password', function () {
  var onlyLetters = /^[A-Za-z]+$/;

  it('Should generate a password with only letter characters', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
    await driver.get(myUrl);
    await driver.findElement(By.id('generate')).click();
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.sendKeys('10');
    await alert.accept();
    let specialCharactersSelection = await driver.switchTo().alert();
    await specialCharactersSelection.dismiss();
    let numericCharactersSelection = await driver.switchTo().alert();
    await numericCharactersSelection.dismiss();
    let lowerCaseCharactersSelection = await driver.switchTo().alert();
    await lowerCaseCharactersSelection.accept();
    let upperCaseCharactersSelection = await driver.switchTo().alert();
    await upperCaseCharactersSelection.accept();
    let password = await driver
      .findElement(By.id('password'))
      .getAttribute('value');
    console.log('password: ', password);
    expect(password).to.match(onlyLetters);
    // assert using chai should
    // alertText.should.equal('Password is too long!');
    await driver.quit();
  });
});

describe('Only Mix of Letters and Numeric characters selected to generate password', function () {
  var onlyLettersAndNumeric = /^[A-Za-z0-9]+$/;

  it('Should generate a password with only letters and numeric characters', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
    await driver.get(myUrl);
    await driver.findElement(By.id('generate')).click();
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.sendKeys('10');
    await alert.accept();
    let specialCharactersSelection = await driver.switchTo().alert();
    await specialCharactersSelection.dismiss();
    let numericCharactersSelection = await driver.switchTo().alert();
    await numericCharactersSelection.accept();
    let lowerCaseCharactersSelection = await driver.switchTo().alert();
    await lowerCaseCharactersSelection.accept();
    let upperCaseCharactersSelection = await driver.switchTo().alert();
    await upperCaseCharactersSelection.accept();
    let password = await driver
      .findElement(By.id('password'))
      .getAttribute('value');
    console.log('password: ', password);
    expect(password).to.match(onlyLettersAndNumeric);
    await driver.quit();
  });
});

describe('Only Lower Case Letter characters selected to generate password', function () {
  var onlyLowerCaseLetters = /^[a-z]+$/;

  it('Should generate a password with only lower case letter characters', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
    await driver.get(myUrl);
    await driver.findElement(By.id('generate')).click();
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.sendKeys('10');
    await alert.accept();
    let specialCharactersSelection = await driver.switchTo().alert();
    await specialCharactersSelection.dismiss();
    let numericCharactersSelection = await driver.switchTo().alert();
    await numericCharactersSelection.dismiss();
    let lowerCaseCharactersSelection = await driver.switchTo().alert();
    await lowerCaseCharactersSelection.accept();
    let upperCaseCharactersSelection = await driver.switchTo().alert();
    await upperCaseCharactersSelection.dismiss();
    let password = await driver
      .findElement(By.id('password'))
      .getAttribute('value');
    console.log('password: ', password);
    expect(password).to.match(onlyLowerCaseLetters);
    await driver.quit();
  });
});

describe('Only Upper Case Letter characters selected to generate password', function () {
  var onlyUpperCaseLetters = /^[A-Z]+$/;

  it('Should generate a password with only lower case letter characters', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
    await driver.get(myUrl);
    await driver.findElement(By.id('generate')).click();
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.sendKeys('10');
    await alert.accept();
    let specialCharactersSelection = await driver.switchTo().alert();
    await specialCharactersSelection.dismiss();
    let numericCharactersSelection = await driver.switchTo().alert();
    await numericCharactersSelection.dismiss();
    let lowerCaseCharactersSelection = await driver.switchTo().alert();
    await lowerCaseCharactersSelection.dismiss();
    let upperCaseCharactersSelection = await driver.switchTo().alert();
    await upperCaseCharactersSelection.accept();
    let password = await driver
      .findElement(By.id('password'))
      .getAttribute('value');
    console.log('password: ', password);
    expect(password).to.match(onlyUpperCaseLetters);
    await driver.quit();
  });
});

describe('Only Special Case characters selected to generate password', function () {
  // note range selector placed at the end
  var onlySpecialCaseCharacters = /^[!@#%^$£&+={}\.-]+$/;

  it('Should generate a password with only special case letter characters', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
    await driver.get(myUrl);
    await driver.findElement(By.id('generate')).click();
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.sendKeys('10');
    await alert.accept();
    let specialCharactersSelection = await driver.switchTo().alert();
    await specialCharactersSelection.accept();
    let numericCharactersSelection = await driver.switchTo().alert();
    await numericCharactersSelection.dismiss();
    let lowerCaseCharactersSelection = await driver.switchTo().alert();
    await lowerCaseCharactersSelection.dismiss();
    let upperCaseCharactersSelection = await driver.switchTo().alert();
    await upperCaseCharactersSelection.dismiss();
    let password = await driver
      .findElement(By.id('password'))
      .getAttribute('value');
    console.log('password: ', password);
    expect(password).to.match(onlySpecialCaseCharacters);
    await driver.quit();
  });
});

describe('All Character Types selected to generate password', function () {
  // note range selector placed at the end
  var anyCharacterType = /^[A-Za-z0-9!@#%^$£&+={}\.-]+$/;

  it('Should generate a password with any character type', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
    await driver.get(myUrl);
    await driver.findElement(By.id('generate')).click();
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.sendKeys('10');
    await alert.accept();
    let specialCharactersSelection = await driver.switchTo().alert();
    await specialCharactersSelection.accept();
    let numericCharactersSelection = await driver.switchTo().alert();
    await numericCharactersSelection.accept();
    let lowerCaseCharactersSelection = await driver.switchTo().alert();
    await lowerCaseCharactersSelection.accept();
    let upperCaseCharactersSelection = await driver.switchTo().alert();
    await upperCaseCharactersSelection.accept();
    let password = await driver
      .findElement(By.id('password'))
      .getAttribute('value');
    console.log('password: ', password);
    expect(password).to.match(anyCharacterType);
    await driver.quit();
  });
});

describe('No Character Type selected to generate password', function () {
  it('Should prompt a message with no character type being selected', async function () {
    let driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();
    await driver.get(myUrl);
    await driver.findElement(By.id('generate')).click();
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.sendKeys('10');
    await alert.accept();
    let specialCharactersSelection = await driver.switchTo().alert();
    await specialCharactersSelection.dismiss();
    let numericCharactersSelection = await driver.switchTo().alert();
    await numericCharactersSelection.dismiss();
    let lowerCaseCharactersSelection = await driver.switchTo().alert();
    await lowerCaseCharactersSelection.dismiss();
    let upperCaseCharactersSelection = await driver.switchTo().alert();
    await upperCaseCharactersSelection.dismiss();
    let errorAlert = await driver.switchTo().alert();
    let alertText = await errorAlert.getText();

    // assert using chai should
    alertText.should.equal(
      'At least one character types needs to be selected.'
    );

    await driver.quit();
  });
});
