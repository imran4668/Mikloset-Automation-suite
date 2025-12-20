import { Page, Locator, expect } from '@playwright/test';

export default class WaitUtils {
  readonly loader: Locator;

  constructor(private page: Page) {
    this.loader = page.getByTestId('for_loader_image');
  }

  async waitForLoader(timeout = 10000) {
    try {
      if (await this.loader.isVisible({ timeout: 1000 })) {
        await this.loader.waitFor({ state: 'detached', timeout });
      }
    } catch {
      // loader not present – safe to continue
    }
  }

  // ---------- Locator based (BEST) ----------

  async waitForVisible(locator: Locator, timeout = 5000) {
    await this.waitForLoader();
    await locator.waitFor({ state: 'visible', timeout });
  }

  async waitForClickable(locator: Locator, timeout = 5000) {
    await this.waitForLoader();
    await locator.waitFor({ state: 'visible', timeout });
    await expect(locator).toBeEnabled({ timeout });
  }

  async click(locator: Locator, timeout = 5000) {
    await this.waitForClickable(locator, timeout);
    await locator.click();
    await this.waitForLoader();
  }

  async waitForText(locator: Locator, text: string, timeout = 5000) {
    await this.waitForLoader();
    await expect(locator).toHaveText(text, { timeout });
  }

  async waitForHidden(locator: Locator, timeout = 5000) {
    await this.waitForLoader();
    await locator.waitFor({ state: 'hidden', timeout });
  }

  async waitForURLContains(partial: string, timeout = 5000) {
    await this.page.waitForURL(`/${partial}`, { timeout });
  }
}
