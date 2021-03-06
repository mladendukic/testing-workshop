let BasePage = require('../page-objects/base-page');
let LoginPage = require('../page-objects/login-page');
let RegisterPage = require('../page-objects/register-page');
let testData = require('../testdata.json');

describe('New user can successfully register and log in', () => {

  let basePage = new BasePage();
  let loginPage = new LoginPage();
  let registerPage = new RegisterPage();

  it('Should navigate to Register page', () => {
    browser.get(registerPage.url);
    expect(basePage.pageTitle).toEqual('Register');
  });

  it('Should register successfully', () => {
    // Note: there is a DB clean-up procedure, so we can always use the same user to register
    registerPage.register(testData.register_username, testData.register_password, testData.register_info);
    basePage.ifElementIsDisplayed(registerPage.successMessage);
    registerPage.confirm();
    expect(basePage.pageTitle).toEqual(testData.register_username);
  });
  
  it('Should navigate to Log in page', () => {
    browser.get(loginPage.url);
    expect(basePage.pageTitle).toEqual('Log in');
  });

  it('Should log in successfully', () => {
    loginPage.logIn(testData.register_username, testData.register_password);
    expect(basePage.pageTitle).toEqual(testData.register_username);
  });

});