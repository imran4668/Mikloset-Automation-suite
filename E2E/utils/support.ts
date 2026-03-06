import { Page, Locator, expect } from '@playwright/test';

export default class WaitUtils {
  readonly loader: Locator;

  constructor(private page: Page) {
    this.loader = page.getByTestId('for_loader_image');
  }

  // -------------------------
  // LOADER HANDLING
  // -------------------------

  async waitForLoader(timeout = 15000) {
    try {
      const isVisible = await this.loader.isVisible({ timeout: 1000 }).catch(() => false);

      if (isVisible) {
        await this.loader.waitFor({ state: 'detached', timeout });
      }
    } catch {
      // Loader not present → safe to continue
    }
  }

  // -------------------------
  // ELEMENT WAITS (STABLE)
  // -------------------------

  async waitForVisible(locator: Locator, timeout = 10000) {
    await this.waitForLoader();

    // Ensure element exists in DOM first
    await locator.waitFor({ state: 'attached', timeout });

    // Scroll only if attached
    await locator.scrollIntoViewIfNeeded();

    // Final visibility assertion
    await expect(locator).toBeVisible({ timeout });
  }

  async waitForClickable(locator: Locator, timeout = 10000) {
    await this.waitForLoader();

    await locator.waitFor({ state: 'visible', timeout });
    await expect(locator).toBeEnabled({ timeout });
  }

  async click(locator: Locator, timeout = 10000) {
    await this.waitForClickable(locator, timeout);
    await locator.click();
    await this.waitForLoader();
  }

  async fill(locator: Locator, text: string, timeout = 10000) {
    await this.waitForClickable(locator, timeout);
    await locator.fill(text);
    await this.waitForLoader();
  }

  async waitForText(locator: Locator, text: string, timeout = 10000) {
    await this.waitForLoader();
    await expect(locator).toHaveText(text, { timeout });
  }

  async waitForHidden(locator: Locator, timeout = 10000) {
    await this.waitForLoader();
    await locator.waitFor({ state: 'hidden', timeout });
  }

  // -------------------------
  // URL WAITS (FIXED FLAKY VERSION)
  // -------------------------

  async waitForURLContains(partial: string, timeout = 15000) {
    await expect(this.page).toHaveURL(new RegExp(partial), { timeout });
  }

  async waitForNavigationStable(timeout = 15000) {
    await this.page.waitForLoadState('networkidle', { timeout });
  }
}