describe('New user system', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
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
    this.actionwords.iEnterInvalidCredentialsemailAndPassword("");
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

  it('User login :Global navbar', function () {
    // Given I on a page https://www.finder.com.au/
    this.actionwords.iOnAPageHttpswwwfindercomau();
    // And I click on Register/login
    this.actionwords.iClickOnRegisterlogin();
    // Then user login modal should appear
    this.actionwords.userLoginModalShouldAppear();
  });

  it('Error message:Invalid login parameter Global navbar', function () {
    // Given I am in user login modal
    this.actionwords.iAmInUserLoginModal();
    // When I enter invalid credentials(email and password)
    this.actionwords.iEnterInvalidCredentialsemailAndPassword("Email\nPassword");
    // And I click on SIGN IN button
    this.actionwords.iClickOnSIGNINButton();
    // Then error message should display
    this.actionwords.errorMessageShouldDisplay("Please enter a valid email address");
  });

  it('Error message: Non existing user ID Global navbar', function () {
    // Given I am in user login modal
    this.actionwords.iAmInUserLoginModal();
    // When I enter non existing email ID with a password
    this.actionwords.iEnterNonExistingEmailIDWithAPassword();
    // And click on SIGN IN button
    this.actionwords.clickOnSIGNINButton();
    // Then error message should display
    this.actionwords.errorMessageShouldDisplay("This email does not have an account.");
  });

  it('New user signup :Global navbar', function () {

  });

  it('User signout Global navbar', function () {
    // Given I click on logout button in global navbar
    this.actionwords.iClickOnLogoutButtonInGlobalNavbar();
    // Then I should be logged out from user sytem and should redirect to /user-profile/sign-up
    this.actionwords.iShouldBeLoggedOutFromUserSytemAndShouldRedirectToUserprofilesignup();
  });

  it('Forget password :/user-profile/sign-in', function () {
    // Given I am on /user-profile/sign-in
    this.actionwords.iAmOnUserprofilesignin();
    // When I click on Forget password button
    this.actionwords.iClickOnForgetPasswordButton();
    // Then forget password email section should display
    this.actionwords.forgetPasswordEmailSectionShouldDisplay();
  });

  it('Forget password error: Empty email /user-profile/sign-in', function () {
    // Given I am on reset my password page
    this.actionwords.iAmOnResetMyPasswordPage();
    // And I click on Reset my password button without entering email
    this.actionwords.iClickOnResetMyPasswordButtonWithoutEnteringEmail();
    // Then error message should load
    this.actionwords.errorMessageShouldLoad("Please enter a valid email address");
  });
});
