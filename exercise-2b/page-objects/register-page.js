let RegisterPage = function() {

  this.url = 'http://testingworkshop/register';
  this.pagetitle = browser.getTitle();
  this.usernameField = $('#reg-username');
  this.passwordField = $('#reg-password');
  this.accountInfoField = $('#reg-accinfo');
  this.registerbutton = $('.register-button');
  this.successMessage = $('.msg-success');
  this.OKbutton = $('.modal-confirmation')
  this.register = (username, password, accountInfo) => {
    this.usernameField.sendKeys(username);
    this.passwordField.sendKeys(password);
    this.accountInfoField.sendKeys(accountInfo);
    this.registerbutton.click();
  };
  this.confirm = () => {
    this.OKbutton.click();
  };
};
  
module.exports = RegisterPage;