// Generated from: E2E/features/followMe.feature
import { test } from "playwright-bdd";

test.describe('Follow Me Page Validation with Mailinator End to End Flow', () => {

  test('Send follow request and validate via Mailinator and application', async ({ Given, When, Then, And, page }) => { 
    await Given('user logs in with sender account', null, { page }); 
    await And('user navigates to Follow Me page'); 
    await When('user searches for a user'); 
    await And('user sends follow request'); 
    await Then('follow request should be sent successfully'); 
    await And('follow request sent notification should be displayed'); 
    await When('user opens Mailinator application'); 
    await And('user enters receiver Mailinator inbox'); 
    await And('user opens follow request email'); 
    await Then('follow request email should be displayed correctly'); 
    await When('user clicks follow request action button from email'); 
    await Then('a new browser tab should be opened'); 
    await And('user should be navigated to follow request page'); 
    await When('user logs in with receiver account in new tab'); 
    await Then('follow request should be visible in follow requests list'); 
  });

  test('Accept follow request and validate via Mailinator and followers list', async ({ Given, When, Then, And }) => { 
    await Given('user logs in with receiver account'); 
    await And('user navigates to Follow Me page'); 
    await When('user accepts the follow request'); 
    await Then('follow request accepted notification should be displayed'); 
    await And('user should be added to followers list'); 
    await When('user opens Mailinator application'); 
    await And('user enters sender Mailinator inbox'); 
    await And('user opens follow request accepted email'); 
    await Then('follow request accepted email should be displayed correctly'); 
    await When('user clicks view profile button from email'); 
    await Then('a new browser tab should be opened'); 
    await And('user should be navigated to user profile page'); 
    await When('user navigates to Follow Me page'); 
    await And('user clicks on Followers tab'); 
    await Then('followers list should be displayed'); 
    await And('followers count should match followers card count'); 
  });

  test('Validate followers and following after follow accepted', async ({ Given, When, Then, And }) => { 
    await Given('user logs in with receiver account'); 
    await And('user navigates to Follow Me page'); 
    await When('user clicks on Followers tab'); 
    await Then('followers list should be displayed'); 
    await When('user clicks on a user name from followers list'); 
    await Then('user should be navigated to selected user profile'); 
    await And('curation section should be visible'); 
    await And('if curation is not available no curation available message should be displayed'); 
    await When('user clicks on Following button from profile'); 
    await Then('following page or slide should be displayed'); 
  });

  test('Validate search in followers following and follow requests', async ({ Given, When, Then, And }) => { 
    await Given('user logs in with receiver account'); 
    await And('user navigates to Follow Me page'); 
    await When('user clicks on Followers tab'); 
    await And('user notes a user name from followers list'); 
    await And('user searches using noted user name'); 
    await Then('searched user should be displayed'); 
    await When('user searches using a random name'); 
    await Then('no results found message should be displayed'); 
    await When('user clicks on Following tab'); 
    await And('user searches using a random name'); 
    await Then('no results found message should be displayed'); 
    await When('user clicks on Follow Requests tab'); 
    await And('user searches using a random name'); 
    await Then('no results found message should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('E2E/features/followMe.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user logs in with sender account","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And user navigates to Follow Me page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user searches for a user","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user sends follow request","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then follow request should be sent successfully","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And follow request sent notification should be displayed","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When user opens Mailinator application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user enters receiver Mailinator inbox","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user opens follow request email","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then follow request email should be displayed correctly","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When user clicks follow request action button from email","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then a new browser tab should be opened","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And user should be navigated to follow request page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When user logs in with receiver account in new tab","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then follow request should be visible in follow requests list","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given user logs in with receiver account","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"And user navigates to Follow Me page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When user accepts the follow request","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then follow request accepted notification should be displayed","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And user should be added to followers list","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When user opens Mailinator application","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And user enters sender Mailinator inbox","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And user opens follow request accepted email","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then follow request accepted email should be displayed correctly","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When user clicks view profile button from email","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then a new browser tab should be opened","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"And user should be navigated to user profile page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When user navigates to Follow Me page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"And user clicks on Followers tab","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then followers list should be displayed","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"And followers count should match followers card count","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":44,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given user logs in with receiver account","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"And user navigates to Follow Me page","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When user clicks on Followers tab","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then followers list should be displayed","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When user clicks on a user name from followers list","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then user should be navigated to selected user profile","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"And curation section should be visible","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"And if curation is not available no curation available message should be displayed","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When user clicks on Following button from profile","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then following page or slide should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":56,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":57,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given user logs in with receiver account","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":60,"keywordType":"Context","textWithKeyword":"And user navigates to Follow Me page","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"When user clicks on Followers tab","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"And user notes a user name from followers list","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"And user searches using noted user name","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then searched user should be displayed","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":67,"keywordType":"Action","textWithKeyword":"When user searches using a random name","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then no results found message should be displayed","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When user clicks on Following tab","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"And user searches using a random name","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then no results found message should be displayed","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When user clicks on Follow Requests tab","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"And user searches using a random name","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then no results found message should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end