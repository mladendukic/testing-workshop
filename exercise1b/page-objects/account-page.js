let AccountPage = function() {

    this.accountInfo = $('#accinfo');
    this.saveButton = $('.save-button');
    this.deleteInfo = () => {
      this.accountInfo.clear();
      this.saveButton.click();
      browser.refresh();
    };
    this.enterInfo = (newInfo) => {
      this.accountInfo.sendKeys(newInfo);
      this.saveButton.click();
      browser.refresh();
    }
    this.getAccountInfo = () => {
      this.accountInfo.getText();
    }
  };
  
  module.exports = AccountPage;