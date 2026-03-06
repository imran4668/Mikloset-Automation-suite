import { Locator, Page, expect } from "@playwright/test";
import dotenv from 'dotenv';
import { logScenario } from "../utils/logs";
import WaitUtils from "../utils/support";

export default class HomePage {

    readonly page: Page;
    readonly signinLink: Locator;
    readonly waitUtils: WaitUtils;


    constructor(page: Page) {
        // dotenv.config();
        this.page = page;
        this.signinLink = page.locator('//*[@id="root"]/div[1]/div/div/div');
        this.waitUtils = new WaitUtils(page);


    }
    //   async goto(url: string = '') {
    //   console.log(`Navigating to: ${process.env.BASE_URL}${url}`);

    //   await this.page.goto(`${process.env.BASE_URL}${url}`, {
    //     timeout: 90000, // dev env can be slow
    //     waitUntil: 'load'
    //   });

    //   await this.page.waitForLoadState('networkidle');
    // }
    async goto(url: string = '') {
        console.log(`Navigating to: ${process.env.BASE_URL}${url}`);

        await this.page.goto(`${process.env.BASE_URL}${url}`, {
            timeout: 90000
        });

        // Ensure redirect completed (if any)
        if (url) {
            await this.waitUtils.waitForURLContains(url);
        }

        // Wait for UI loader to disappear
        await this.waitUtils.waitForLoader();
    }




    async navigateToLoginPage() {
        await this.page.waitForLoadState('networkidle');
        await this.signinLink.click();
        await this.page.waitForLoadState('networkidle');

    }



}