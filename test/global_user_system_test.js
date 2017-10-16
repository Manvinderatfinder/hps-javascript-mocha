describe('Global user system', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();
    // Tags: JIRA:GXUSR-61 JIRA:GXUSR-591
    // TODO: Implement action: "Given I click on"
    throw 'Not implemented';
  });

  it('Existing user login', function () {

  });
});
