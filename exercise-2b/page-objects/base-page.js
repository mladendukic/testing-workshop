let BasePage = function() {

  let EC = protractor.ExpectedConditions;
  
  this.pageTitle = browser.getTitle();
  this.ifElementIsDisplayed = (elm) => {
    browser.wait(EC.visibilityOf(elm), 15000);
  };
};
  
module.exports = BasePage;