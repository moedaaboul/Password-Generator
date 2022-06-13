require('chromedriver');
const { By, Builder, until } = require('selenium-webdriver');
const assert = require('assert');
var should = require('chai').should();
// describe block

describe('Non-numeric inputs entered for number of password characters.', function () {
  // it block
  it('Should be rejected', async function () {
    let driver = await new Builder().forBrowser('chrome').build();

    // navigate to the application
    await driver.get('http://127.0.0.1:5500/index.html');

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
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://127.0.0.1:5500/index.html');
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
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://127.0.0.1:5500/index.html');
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
