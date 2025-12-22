import { Given, When, Then } from '../pageFixture/page.fIxture';

Given('I am on the Mikloset login page', async ({ homePage }) => {
    await homePage.goto("/signin");
});

// Covers: When I enter username "..." and password "..."
// Covers: When I try using "..." and "..."
// Covers: When I attempt login using "..." and "..."
// Note: In BDD, you can use regex or multiple definitions, 
// but simply mapping the exact strings from your feature is safest.

When('I enter username {string} and password {string}', async ({ loginPage }, username, password) => {
    await loginPage.login(username, password);
});

When('I try using {string} and {string}', async ({ loginPage }, username, password) => {
    await loginPage.login(username, password);
});

When('I attempt login using {string} and {string}', async ({ loginPage }, username, password) => {
    await loginPage.login(username, password);
});

// Success Step
Then('I should see {string} and if you see welcome storecookies', async ({ loginPage }, expectedOutcome) => {
    // The storing of cookies is commented out in your POM, so we just validate success here
    await loginPage.validateLoginSuccess();
});

// Consolidated Error Steps
Then('I should see the error message {string}', async ({ loginPage }, error) => {
    await loginPage.verifyErrorMsg(error);
});

Then('I should see {string}', async ({ loginPage }, message) => {
    if (message === "Welcome") {
        await loginPage.validateLoginSuccess();
    } else {
        await loginPage.verifyErrorMsg(message);
    }
});

// UI State Steps
Then('the login button should be disabled', async ({ loginPage }) => {
    await loginPage.validateLoginButton();
});

When('press login button', async ({ loginPage }) => {
    await loginPage.pressLoginButton();
});