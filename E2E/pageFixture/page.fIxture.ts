import { test as base, createBdd } from 'playwright-bdd';
import SignupPage from '../pom/sinupPage';
import HomePage from '../pom/homePage'; // Ensure this file exists
import { LoginPage } from '../pom/loginPage';
import DashboardPage from '../pom/dashboardPage';
import { logResult, logScenario } from '../utils/logs';
import FollowMePage from '../pom/followMePage';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url'; // 1. Add this import

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const authFile = path.join(__dirname, '..', 'auth.json');

type Fixtures = {
  signupPage: SignupPage;
  homePage: HomePage;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  FollowMePage: FollowMePage;
};

export const test = base.extend<Fixtures>({
  context: async ({ browser }, use, testInfo) => {
    logScenario(testInfo);
    const useAuth = testInfo.tags.includes('@loggedIn');
    let context: any;
    if (useAuth) {
      context = await browser.newContext({
        storageState: 'auth.json',
      });
    } else {
      context = await browser.newContext();
    }

    await use(context);
    logResult(testInfo);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  FollowMePage: async ({ page }, use) => {
    await use(new FollowMePage(page));
  },
});

export const { Given, When, Then } = createBdd(test);
export { expect } from '@playwright/test';