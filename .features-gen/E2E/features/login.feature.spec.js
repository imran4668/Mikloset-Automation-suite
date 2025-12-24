// Generated from: E2E/features/login.feature
import { test } from "../../../E2E/pageFixture/page.fIxture.ts";

test.describe('User Login Functionality', () => {

  test.beforeEach('Background', async ({ Given, homePage }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the Mikloset login page', null, { homePage }); 
  });
  
  test('Successful login with valid username - imran467267', { tag: ['@Login', '@Positive'] }, async ({ When, Then, loginPage }) => { 
    await When('I enter username "imrans" and password "Mikloset@123"', null, { loginPage }); 
    await Then('I should see "Welcome" and if you see welcome storecookies', null, { loginPage }); 
  });

  test('Successful login with valid email - imran023786@gmail.com', { tag: ['@Login', '@Positive'] }, async ({ When, Then, loginPage }) => { 
    await When('I enter username "imran023786@gmail.com" and password "Imran@46726"', null, { loginPage }); 
    await Then('I should see "Welcome" and if you see welcome storecookies', null, { loginPage }); 
  });

  test('Successful login with case variation email - ImRan023786@gmail.com', { tag: ['@Login', '@Positive'] }, async ({ When, Then, loginPage }) => { 
    await When('I enter username "ImRan023786@gmail.com" and password "Imran@46726"', null, { loginPage }); 
    await Then('I should see "Welcome" and if you see welcome storecookies', null, { loginPage }); 
  });

  test('Invalid password', { tag: ['@Login', '@Negative'] }, async ({ When, Then, loginPage }) => { 
    await When('I enter username "imran023786@gmail.com" and password "immma"', null, { loginPage }); 
    await Then('I should see the error message "Password is not Valid"', null, { loginPage }); 
  });

  test('Unregistered user', { tag: ['@Login', '@Negative'] }, async ({ When, Then, loginPage }) => { 
    await When('I enter username "imran023" and password "immma"', null, { loginPage }); 
    await Then('I should see the error message "No account created"', null, { loginPage }); 
  });

  test('Empty username', { tag: ['@Login', '@Negative'] }, async ({ When, Then, loginPage }) => { 
    await When('I enter username "" and password "Imran@46726"', null, { loginPage }); 
    await Then('I should see the error message "Please enter a Email or UserName"', null, { loginPage }); 
  });

  test('Empty password', { tag: ['@Login', '@Negative'] }, async ({ When, Then, loginPage }) => { 
    await When('I enter username "imran023786@gmail.com" and password ""', null, { loginPage }); 
    await Then('I should see the error message "Please enter a Password"', null, { loginPage }); 
  });

  test('Script injection attempt', { tag: ['@Login', '@Negative'] }, async ({ When, Then, loginPage }) => { 
    await When('I enter username "<script>alert(1)</script>" and password "test"', null, { loginPage }); 
    await Then('I should see the error message "No account created"', null, { loginPage }); 
  });

  test('Blank fields', { tag: ['@Login', '@Edge'] }, async ({ When, Then, And, loginPage }) => { 
    await When('I try using "" and ""', null, { loginPage }); 
    await Then('the login button should be disabled', null, { loginPage }); 
    await And('I should see the error message "Please enter a Email or UserName"', null, { loginPage }); 
  });

  test('Trim whitespace from inputs', { tag: ['@Login', '@Edge'] }, async ({ When, Then, loginPage }) => { 
    await When('I attempt login using " imransoftsuave@gmail.com " and "Mikloset@123 "', null, { loginPage }); 
    await Then('I should see "Welcome"', null, { loginPage }); 
  });

  test('Case insensitive email', { tag: ['@Login', '@Edge'] }, async ({ When, Then, loginPage }) => { 
    await When('I attempt login using "IMRAN023786@GMAIL.COM" and "Imran@46726"', null, { loginPage }); 
    await Then('I should see "Welcome"', null, { loginPage }); 
  });

  test('Unicode input validation', { tag: ['@Login', '@Edge'] }, async ({ When, Then, loginPage }) => { 
    await When('I attempt login using "👨‍💻imran" and "Imran@46726"', null, { loginPage }); 
    await Then('I should see "No account created"', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('E2E/features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":13,"tags":["@Login","@Positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I enter username \"imrans\" and password \"Mikloset@123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"imrans\"","children":[{"start":18,"value":"imrans","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"Mikloset@123\"","children":[{"start":40,"value":"Mikloset@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Welcome\" and if you see welcome storecookies","stepMatchArguments":[{"group":{"start":13,"value":"\"Welcome\"","children":[{"start":14,"value":"Welcome","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":18,"tags":["@Login","@Positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I enter username \"imran023786@gmail.com\" and password \"Imran@46726\"","stepMatchArguments":[{"group":{"start":17,"value":"\"imran023786@gmail.com\"","children":[{"start":18,"value":"imran023786@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"Imran@46726\"","children":[{"start":55,"value":"Imran@46726","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Welcome\" and if you see welcome storecookies","stepMatchArguments":[{"group":{"start":13,"value":"\"Welcome\"","children":[{"start":14,"value":"Welcome","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":23,"tags":["@Login","@Positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I enter username \"ImRan023786@gmail.com\" and password \"Imran@46726\"","stepMatchArguments":[{"group":{"start":17,"value":"\"ImRan023786@gmail.com\"","children":[{"start":18,"value":"ImRan023786@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"Imran@46726\"","children":[{"start":55,"value":"Imran@46726","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Welcome\" and if you see welcome storecookies","stepMatchArguments":[{"group":{"start":13,"value":"\"Welcome\"","children":[{"start":14,"value":"Welcome","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":30,"tags":["@Login","@Negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When I enter username \"imran023786@gmail.com\" and password \"immma\"","stepMatchArguments":[{"group":{"start":17,"value":"\"imran023786@gmail.com\"","children":[{"start":18,"value":"imran023786@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"immma\"","children":[{"start":55,"value":"immma","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Password is not Valid\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Password is not Valid\"","children":[{"start":32,"value":"Password is not Valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":35,"tags":["@Login","@Negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When I enter username \"imran023\" and password \"immma\"","stepMatchArguments":[{"group":{"start":17,"value":"\"imran023\"","children":[{"start":18,"value":"imran023","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"immma\"","children":[{"start":42,"value":"immma","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"No account created\"","stepMatchArguments":[{"group":{"start":31,"value":"\"No account created\"","children":[{"start":32,"value":"No account created","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":40,"tags":["@Login","@Negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When I enter username \"\" and password \"Imran@46726\"","stepMatchArguments":[{"group":{"start":17,"value":"\"\"","children":[{"start":18,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"Imran@46726\"","children":[{"start":34,"value":"Imran@46726","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Please enter a Email or UserName\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter a Email or UserName\"","children":[{"start":32,"value":"Please enter a Email or UserName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":45,"tags":["@Login","@Negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When I enter username \"imran023786@gmail.com\" and password \"\"","stepMatchArguments":[{"group":{"start":17,"value":"\"imran023786@gmail.com\"","children":[{"start":18,"value":"imran023786@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"\"","children":[{"start":55,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Please enter a Password\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter a Password\"","children":[{"start":32,"value":"Please enter a Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":45,"pickleLine":50,"tags":["@Login","@Negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When I enter username \"<script>alert(1)</script>\" and password \"test\"","stepMatchArguments":[{"group":{"start":17,"value":"\"<script>alert(1)</script>\"","children":[{"start":18,"value":"<script>alert(1)</script>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":58,"value":"\"test\"","children":[{"start":59,"value":"test","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"No account created\"","stepMatchArguments":[{"group":{"start":31,"value":"\"No account created\"","children":[{"start":32,"value":"No account created","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":50,"pickleLine":57,"tags":["@Login","@Edge"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When I try using \"\" and \"\"","stepMatchArguments":[{"group":{"start":12,"value":"\"\"","children":[{"start":13,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"\"","children":[{"start":20,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then the login button should be disabled","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"And I should see the error message \"Please enter a Email or UserName\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter a Email or UserName\"","children":[{"start":32,"value":"Please enter a Email or UserName","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":63,"tags":["@Login","@Edge"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When I attempt login using \" imransoftsuave@gmail.com \" and \"Mikloset@123 \"","stepMatchArguments":[{"group":{"start":22,"value":"\" imransoftsuave@gmail.com \"","children":[{"start":23,"value":" imransoftsuave@gmail.com ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"\"Mikloset@123 \"","children":[{"start":56,"value":"Mikloset@123 ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Welcome\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Welcome\"","children":[{"start":14,"value":"Welcome","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":61,"pickleLine":68,"tags":["@Login","@Edge"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":69,"keywordType":"Action","textWithKeyword":"When I attempt login using \"IMRAN023786@GMAIL.COM\" and \"Imran@46726\"","stepMatchArguments":[{"group":{"start":22,"value":"\"IMRAN023786@GMAIL.COM\"","children":[{"start":23,"value":"IMRAN023786@GMAIL.COM","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"Imran@46726\"","children":[{"start":51,"value":"Imran@46726","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":63,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Welcome\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Welcome\"","children":[{"start":14,"value":"Welcome","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":66,"pickleLine":73,"tags":["@Login","@Edge"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Mikloset login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When I attempt login using \"👨‍💻imran\" and \"Imran@46726\"","stepMatchArguments":[{"group":{"start":22,"value":"\"👨‍💻imran\"","children":[{"start":23,"value":"👨‍💻imran","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"Imran@46726\"","children":[{"start":40,"value":"Imran@46726","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":68,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then I should see \"No account created\"","stepMatchArguments":[{"group":{"start":13,"value":"\"No account created\"","children":[{"start":14,"value":"No account created","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end