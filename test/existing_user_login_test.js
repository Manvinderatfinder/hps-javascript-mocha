describe('Existing user login', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();
  });

  it('Existing user login - /user-profile/sign-in', function () {
    // Given I am in  /user-profile/sign-in page
    this.actionwords.iAmInUserprofilesigninPage();
    // And I enter my existing credentials to sign in
    this.actionwords.iEnterMyExistingCredentialsToSignIn();
    // When I click on SIGN IN button
    this.actionwords.iClickOnSIGNINButton();
    // Then I should be sign in to user system
    this.actionwords.iShouldBeSignInToUserSystem();
    // And I should redirect to my profile section
    this.actionwords.iShouldRedirectToMyProfileSection();
    // And url in the browser should be /user-profile/questions
    this.actionwords.urlInTheBrowserShouldBeUserprofilequestions();
  });

  it('Error message: Invalid login parameter', function () {
    // Given I am in /user-profile/sign-in page
    this.actionwords.iAmInUserprofilesigninPage();
    // When I enter invalid credentials(email and password)
    this.actionwords.iEnterInvalidCredentialsemailAndPassword();
    // And I click on SIGN IN button
    this.actionwords.iClickOnSIGNINButton();
    // Then error message should display
    this.actionwords.errorMessageShouldDisplay("Please enter a valid email address");
  });

  it('Error message: Non existing user ID', function () {
    // Given I am in /user-profile/sign-in page
    this.actionwords.iAmInUserprofilesigninPage();
    // When I enter non existing email ID with a password
    this.actionwords.iEnterNonExistingEmailIDWithAPassword();
    // And click on SIGN IN button
    this.actionwords.clickOnSIGNINButton();
    // Then error message should display
    this.actionwords.errorMessageShouldDisplay("This email does not have an account.");
  });

  it('New user signup: /user-profile/sign-up', function () {
    // Given I am in /user-profile/sign-up page
    this.actionwords.iAmInUserprofilesignupPage();
  });
});
