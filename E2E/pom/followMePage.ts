// pages/FollowMePage.ts
import { Page,expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FollowMePage extends BasePage {

  readonly followerLength: Locator;
  readonly follower: Locator;
  readonly followingLength: Locator;
  readonly following: Locator;
  readonly followRequestLength: Locator;
  readonly followRequest: Locator;
  //

  constructor(page: Page) {
    super(page);
    //followers locators
    this.followerLength = page.getByTestId('followers_length');
    this.follower = page.getByTestId('followers_text');
    this.followingLength = page.getByTestId('following_length');
    this.following = page.getByTestId('following_text');
    this.followRequestLength = page.getByTestId('follow_request_length');
    this.followRequest = page.getByTestId('follow_request_text');
    //
  }

  

 
}
