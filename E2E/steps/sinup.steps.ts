import { Given, When, Then } from '../pageFixture/page.fIxture'; // Use the fixture file imports
import { expect } from '@playwright/test';

// Background
Given('I am on the Mikloset signup page', async ({ homePage }) => {
   await homePage.goto("/signup");
});

When('I click on Sign up with email', async ({ signupPage }) => {
   await signupPage.openSignUpForm();
});

// Input Steps
When('I enter full name {string}', async ({ signupPage }, fullName) => {
   await signupPage.enterFullName(fullName);
});

When('I enter email address {string}', async ({ signupPage }, email) => {
   await signupPage.enterMail(email);
});

When('I enter username {string}', async ({ signupPage }, username) => {
   await signupPage.enterUserName(username);
});

When('I enter password {string}', async ({ signupPage }, password) => {
   await signupPage.enterPassword(password);
});

When('I select gender {string}', async ({ signupPage }, gender) => {
   await signupPage.enterGender(gender);
});

When('I click on Sign up button', async ({ signupPage }) => {
   await signupPage.pressSignupButton();
});

// Verification Steps
Then('I should see a success message Signup successful or error {string}', async ({ signupPage }, err) => {
   await signupPage.validateErrOrWelcomeMsg(err);
});

Then('I should see {string} option', async ({ signupPage }, buttons) => {
   await signupPage.verifyButtons(buttons);
});

Then('I should see fields for {string}, {string}, {string} and {string}', async ({ signupPage }, name, mail, userName, password) => {
   await signupPage.verifyFields();
});

Then('I should see gender options {string}, {string}, and {string}', async ({ signupPage }, female, male, genderNeutral) => {
   await signupPage.verifyGenders();
});

Then('I should see a Sign up button', async ({ signupPage }) => {
   await signupPage.verifySignupButton();
});

// Negative Scenarios
When('I leave all fields blank', async ({ signupPage }) => {
   // Just verify button is visible, doing nothing allows the next step (clicking signup) to trigger errors
   await signupPage.verifySignupButton();
});

Then('the Sign up button should be disabled', async ({ signupPage }) => {
   await signupPage.VerifySignupButtonDisable();
});

Then('I should see validation messages for required fields', async ({ signupPage }) => {
   await signupPage.verifyValidationMsg(); // Calls the bulk verify method
});

Then('I should see an error message {string}', async ({ signupPage }, error) => {
   await signupPage.verifyValidationMsg(error);
});