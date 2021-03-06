let LoginPage = function() {

  this.url = 'http://testingworkshop/login';
  this.usernameField = $('#username');
  this.passwordField = $('input[name="password"]');
  this.submitButton = $('.submit-button');
  this.logIn = (username, password) => {
    this.usernameField.sendKeys(username);
    this.passwordField.sendKeys(password);
    this.submitButton.click();
  };
};
  
module.exports = LoginPage;