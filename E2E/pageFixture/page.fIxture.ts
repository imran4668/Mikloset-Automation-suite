import { test as base, createBdd } from 'playwright-bdd';
import { Page, BrowserContext, expect } from '@playwright/test';
import HomePage from '../pom/homePage';
import { LoginPage } from '../pom/loginPage';
import dashboardPage from '../pom/dashboardPage';
import SignupPage from '../pom/sinupPage';
import { FollowMePage } from '../pom/followMePage';

// 1. Define the type for your custom fixtures (Page Objects + State)
type Fixtures = {
  context: BrowserContext;
  page: Page;
  mailinatorPage: Page;
  
  // Page Objects (The "Factory" part)
  homePage: HomePage;
  loginPage: LoginPage;
  dashboard: dashboardPage;
  signupPage: SignupPage;
  followMePage: FollowMePage;

  // Shared State
  testState: {
    newTab?: Page;
    senderName?: string;
  };
};

// 2. Extend the base test to create the "Factory"
export const test = base.extend<Fixtures>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },

  mailinatorPage: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },

  testState: async ({}, use) => {
    await use({});
  },

  // --- Initialize Page Objects ---
  
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboard: async ({ page }, use) => {
    await use(new dashboardPage(page));
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },

  followMePage: async ({ page }, use) => {
    await use(new FollowMePage(page));
  },
});

// 3. Export BDD keywords
export const { Given, When, Then } = createBdd(test);
export { expect } from '@playwright/test';