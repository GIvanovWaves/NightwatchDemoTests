
var url = 'https://beta.wavesplatform.com/';

var appLoader = 'div.app-loader';
var getStartedButton = 'button.submit.big';
var headline = 'div.headline-1'

var signInLink = 'a.ng-scope';

var restoreLink = 'a[href="/restore"]'

var addresInputSelector = 'div.input-like.big.margin-3.ng-scope';
var addresInputXpath = '';
var addressInputTextXpath = '//div[@w-i18n="userList.address"]';

var walletSeedTextArea = 'textarea[ng-model="$ctrl.seed"]';
var walletSeedAddress = 'div[ng-class="{empty: !$ctrl.address}"]';
var walletSeedContinueButton = 'button[ng-transclude]';

var passwordField = 'input[ng-model="$ctrl.password"]';
var passwordConfirmField = 'input[ng-model="$ctrl.confirmPassword"]';
var signInButton = 'button[ng-transclude]';

var securityCheckBox = 'input[id=security]';
var backupCheckBox = 'input[id=backup]';
var analitycsCheckBox = 'input[id=shareAnalytics]';

var seed = 'letter column long desk cool image vessel group powder slide polar car size report genuine';
var address  = '3PHoTqPgraC3UQh5Xe7vTPA5wpPVcmfuDyZ'
var pass = 'Some secure pass';

var longWait = 5000;
var shortWait = 2000;

module.exports = {

  'Demo test Waves' : function (browser) {

    browser
      .maximizeWindow()
      .url(url)
      .waitForElementVisible(appLoader, shortWait)
      .waitForElementNotPresent(appLoader, longWait)
      .waitForElementVisible(getStartedButton, longWait)
      .click(getStartedButton)
      .pause(shortWait)
      .assert.visible(headline)
  },

  'Go to restore page' : function (browser) {

    browser
      .waitForElementVisible(restoreLink, shortWait)
      .click(restoreLink)
  },

  'Restore wallet from seed' : function (browser) {
    
    browser
      .waitForElementVisible(walletSeedTextArea, shortWait)
      .setValue(walletSeedTextArea, seed)
      .assert.containsText(walletSeedAddress, address)
      .click(walletSeedContinueButton)
  },

  'Wait for password inputs' : function (browser) {
    browser
        .waitForElementVisible(passwordField, longWait)
        .waitForElementVisible(passwordConfirmField, longWait)
  },

  'Set different passwords' : function (browser) {
      browser
        .setValue(passwordField, pass)
        .setValue(passwordConfirmField, pass+"ERROR")
        .assert.attributeEquals(signInButton, "disabled", "true")
  },

  'Set short password' : function (browser) {
      browser
        .clearValue(passwordField)
        .clearValue(passwordConfirmField)
        .setValue(passwordField, "1234567")
        .setValue(passwordConfirmField, "1234567")
        .assert.attributeEquals(signInButton, "disabled", "true")
  },

  'Set new password' : function(browser) {
      browser
        .clearValue(passwordField)
        .clearValue(passwordConfirmField)
        .setValue(passwordField, pass)
        .setValue(passwordConfirmField, pass)
        .click(signInButton)
  },

  'Close browser' : function (browser) {
      
      browser
        .pause(3000)
        .end();
  }
};