// pages/BasePage.ts
import { Page } from '@playwright/test';
import waitUtils from '../utils/support';

export class BasePage {
  protected page: Page;
  protected wait: waitUtils;

  constructor(page: Page) {
    this.page = page;
    this.wait = new waitUtils(page);
  }
}
