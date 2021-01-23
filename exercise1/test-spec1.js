let LoginPage = require('../login-page');

describe('User can update account info', () => {

  let loginPage = new LoginPage();
  
  it('Should navigate to Log in page', () => {
    browser.get('http://testingworkshop/login');
  });

  it('Should log in successfully', () => {
    loginPage.usernameField.sendKeys('Testuser1');
    loginPage.passwordField.sendKeys('P@$5w0rD');
    loginPage.submitButton.click();
    expect(loginPage.pageTitle).toEqual('Testuser1');
  });

  it('Should clear existing account info', () => {
    loginPage.accountInfo.clear();
    loginPage.saveButton.click();
    browser.refresh();
    expect(loginPage.accountInfo.getText()).toEqual('');
  });

  it('Should update account info', () => {
    loginPage.accountInfo.sendKeys("New account info");
    loginPage.saveButton.click();
    browser.refresh();
    expect(loginPage.accountInfo.getText()).toEqual("New account info");
  });

});