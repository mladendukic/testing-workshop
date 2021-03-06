let LoginPage = function() {

    this.pageTitle = browser.getTitle();
    this.usernameField = $('#username');
    this.passwordField = $('input[name="password"]');
    this.submitButton = $('.submit-button');
    this.accountInfo = $('#accinfo');
    this.saveButton = $('.save-button');
  };
  
  module.exports = LoginPage;