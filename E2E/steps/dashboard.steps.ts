import { Given, When, Then } from '../pageFixture/page.fIxture';
// import DashboardPage from '../pom/dashboardPage';

// --- Login & Setup ---

Given('the user navigates to the Mikloset login page', async ({ homePage }) => {
      await homePage.goto("/signin");
});

Given('the user logs in with credentials for a {string} account user {string} and pass {string}',
      async ({ loginPage }, gender, username, password) => {
            await loginPage.login(username, password);
            console.log(`Logged in as ${gender} user: ${username}`);
      });

Given('the user should be in dashboard page in Mikloset', async ({ dashboardPage}) => {
      // Assuming the user is already logged in from Background or previous steps, 
      // or needs to verify they are there.
      // If this step implies "I am logged in", it might need to call login.
      // Based on your feature, it seems to rely on session persistence or Background steps.
      // We will check the URL.
      // await homePage.page.waitForURL(/dashboard/); 
      // If you need to force login here, you might need to refactor.
      
      await dashboardPage.dashboardPage();
});

// --- Background Verification ---

Then('the background image should match the {string} background', async ({ dashboardPage }, gender) => {
      await dashboardPage.verifyBackgroundImage(gender);
});

// --- Category Verification ---

Then('the user should see the following categories and navigate correctly:', async ({ dashboardPage }, dataTable) => {
      // dataTable.raw() returns [][]string. .flat() makes it string[]
      const categories = dataTable.raw().flat();
      await dashboardPage.verifyCategories(categories);
});

Then('check view all link for categories', async ({ dashboardPage }) => {
      await dashboardPage.verifyViewAllLinkForCategories();
});

// --- Header Section ---

Then('the user should see the header sections {string}, {string}, {string}, and {string}',
      async ({ dashboardPage }, h1, h2, h3, h4) => {
            await dashboardPage.verifyHeaderSections(h1, h2, h3, h4);
            await dashboardPage.verifyHeaderNavigation(h1, h2, h3, h4);
      });

Then('the user should see the welcome message Welcome', async ({ dashboardPage }) => {
      await dashboardPage.verifyWelcomeMessage();
});

Then('the user should see follower details with {string}, {string}, and {string}',
      async ({ dashboardPage }, follower, following, request) => {
            await dashboardPage.verifyFollowerDetails(follower, following, request);
      });

// --- Style Journey Steps ---

Then('the user should see the title Your Style Journey in 3 Steps', async ({ dashboardPage }) => {
      await dashboardPage.verifyStepTitle();
});

// Matches: step 1 should display "Add Items" with description and a button "Add Items"
Then('step {int} should display {string} with description and a button {string}',
      async ({ dashboardPage }, stepNum, title, btnText) => {
      
            await dashboardPage.verifyStepDetails(stepNum);
      });

// --- Navigation & Menu Options ---

When('the user selects {string}', async ({ dashboardPage }, option) => {
      await dashboardPage.verifyStep1MenuOptions(option);
});

Then('the system should display a toast message {string}', async ({ dashboardPage }, msg) => {
      await dashboardPage.verifyEmailCopiedToastMessage();
});

Then('the system should navigate to the {string} page', async ({ dashboardPage }, pageName) => {
      // await dashboardPage.verifyNavigationPage(pageName);
});

// --- Footer Section ---

Then('the user should see the footer links:', async ({ dashboardPage }, dataTable) => {
      const links = dataTable.rows().flat();
      await dashboardPage.verifyFooterLinks(links);
});

Then('the footer should display {string}', async ({ dashboardPage }, copyrightText) => {
      await dashboardPage.verifyFooterLinks(copyrightText);
});

// --- Device View & Edit ---

Given('the user is on {string} view', async ({ dashboardPage }, device) => {
      await dashboardPage.verifyDeviceView(device);
});

Then('the user opens and verifies edit option for all categories and change images', async ({ dashboardPage }) => {
      // Note: This only works on Desktop based on your POM logic
      await dashboardPage.verifyEditOptionInDesktop();
});