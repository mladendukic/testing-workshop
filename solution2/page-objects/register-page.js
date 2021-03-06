let RegisterPage = function() {

    this.url = 'http://testingworkshop/register';
    this.usernameField = $('#reg-username');
    this.passwordField = $('#reg-password');
    this.accountInfoField = $('#reg-accinfo');
    this.registerButton = $('.register-button');
    this.successMessage = $('.msg-success');
    this.okButton = $('.modal-confirmation')
    this.register = (username, password, accountInfo) => {
      this.usernameField.sendKeys(username);
      this.passwordField.sendKeys(password);
      this.accountInfoField.sendKeys(accountInfo);
      this.registerButton.click();
    };
    this.confirm = () => {
      this.okButton.click();
    };
  };
    
  module.exports = RegisterPage;