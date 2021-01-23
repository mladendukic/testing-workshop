let AccountPage = require('../page-objects/account-page');
let BasePage = require('../page-objects/base-page');
let LoginPage = require('../page-objects/login-page');
let testData = require('../testdata.json');

describe('User can update account info', () => {

  let accountPage = new AccountPage();
  let basePage = new BasePage();
  let loginPage = new LoginPage();
  
  it('Should navigate to Log in page', () => {
    browser.get(loginPage.url);
    expect(basePage.pageTitle).toEqual('Log in');
  });

  it('Should log in successfully', () => {
    loginPage.logIn(testData.test_username, testData.test_password); // can be improved with .env
    expect(basePage.pageTitle).toEqual(testData.test_username);
  });

  it('Should update account info', () => {
    let newInfo = "New account info";
    accountPage.deleteIfo();
    expect(loginPage.getAccountInfo).toEqual('');
    accountPage.enterInfo(newInfo)
    expect(loginPage.getAccountInfo).toEqual(newInfo);
  });

});