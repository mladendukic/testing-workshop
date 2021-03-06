let AccountPage = require('../page-objects/account-page');
let BasePage = require('../page-objects/base-page');
let LoginPage = require('../page-objects/login-page');
let testData = require('../testdata.json');

describe('Test 1 - update', () => {

  let accountPage = new AccountPage();
  let basePage = new BasePage();
  let loginPage = new LoginPage();
  
  it('Log in', () => {
    browser.get(loginPage.url);
    if (basePage.pageTitle.startsWith('Log in')) {
      loginPage.logIn(testData.test_username, testData.test_password); // can be improved with .env
    } else {
      fail("Log in failed.");
    }
  });

  it('Update is successful', () => {
    let newInfo = "New account info";
    accountPage.deleteIfo();
    expect(loginPage.getAccountInfo).toEqual('');
    accountPage.enterInfo(newInfo);
    expect(loginPage.getAccountInfo).toEqual(newInfo);
  });

});