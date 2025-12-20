import { test as base, createBdd } from 'playwright-bdd';
import { Page, BrowserContext, expect } from '@playwright/test';

// 1. Define the interface for your custom fixtures
type Fixtures = {
  context: BrowserContext;
  page: Page;
  mailinatorPage: Page; // Separate page for Mailinator
  // Shared state to handle multi-tab flows
  testState: {
    newTab?: Page;        // To store the new tab opened from email
    senderName?: string;  // To store data between steps if needed
  };
};

// 2. Extend the base test
export const test = base.extend<Fixtures>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },
  
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    // Page closes when context closes
  },

  // Fixture for Mailinator (starts as a separate page/tab)
  mailinatorPage: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  },

  // Mutable object to store state (like the new tab) across steps
  testState: async ({}, use) => {
    await use({}); 
  },
});

// 3. Export BDD keywords and expect from THIS file
export const { Given, When, Then } = createBdd(test);
export { expect } from '@playwright/test';