// fixtures/page.fixture.ts
import { test as base, Page, BrowserContext } from '@playwright/test';

type Fixtures = {
  context: BrowserContext;
  page: Page;
  mailinatorPage: Page;
  followRequestTab?: Page;
};

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

  followRequestTab: async ({}, use) => {
    await use(undefined);
  },
});

export { expect } from '@playwright/test';
