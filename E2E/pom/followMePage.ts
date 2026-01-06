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

  readonly findCreatorsTab: Locator ;
  readonly followMeSearchBox: Locator ;
  readonly followReq: Locator ;


  
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
    this.findCreatorsTab = page.getByTestId('find_creators');
    this.followMeSearchBox = page.getByPlaceholder('Search...');
    this.followReq = page.locator("//button[@data-testid='loader_button' and text()='Follow']").first();

  }

  async navigateToFollowMePage() {
    await this.wait.click(this.followMePage);
  }
  async clickOnFindCreatorsTab() {
    await this.wait.click(this.findCreatorsTab);
  }
  async searchUser(userName: string) {
    await this.wait.fill(this.followMeSearchBox, userName);
    await this.followReq.click();
  }

  

 
}
