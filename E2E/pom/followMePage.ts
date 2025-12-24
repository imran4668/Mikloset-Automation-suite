// pages/FollowMePage.ts
import { BrowserContext, Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import WaitUtils from '../utils/support';

export default class FollowMePage {

  private wait: WaitUtils;
  private page: Page;
  //followers locators
  readonly followerLength: Locator;
  readonly follower: Locator;
  readonly followingLength: Locator;
  readonly following: Locator;
  readonly followRequestLength: Locator;
  readonly followRequest: Locator;
  //followme page 
  readonly followMePage: Locator ;


  
    constructor(page: Page) {
      
      this.page = page;
      this.wait = new WaitUtils(page);
    //followers locators
    this.followerLength = page.getByTestId('followers_length');
    this.follower = page.getByTestId('followers_text');
    this.followingLength = page.getByTestId('following_length');
    this.following = page.getByTestId('following_text');
    this.followRequestLength = page.getByTestId('follow_request_length');
    this.followRequest = page.getByTestId('follow_request_text');
    //followme page
    this.followMePage = page.getByTestId('followMe_name');

  }

  async navigateToFollowMePage() {
    await this.wait.click
  }

  

 
}
