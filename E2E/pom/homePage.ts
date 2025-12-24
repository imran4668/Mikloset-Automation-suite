import { Locator, Page ,expect} from "@playwright/test";
import dotenv from 'dotenv';
import { logScenario } from "../utils/logs";

export default class HomePage {
    
    readonly page:Page;
    readonly signinLink:Locator;
    

    constructor(page:Page) {
        // dotenv.config();
        this.page = page;
        this.signinLink=page.locator('//*[@id="root"]/div[1]/div/div/div');
       
    }
  async goto(url: string = '') {
        try {
            
            // Check if we are already on the dashboard to avoid reloading
            // Using a short timeout (e.g., 2s) so we don't wait too long if we aren't logged in
            await expect(this.page).toHaveURL(/dashboard/, { timeout: 2000 });
            console.log("Already on dashboard, skipping navigation.");
        } catch (err) {
            // If not on dashboard, navigate to the requested URL
            console.log(`Navigating to: ${process.env.BASE_URL}${url}`);
            
            await this.page.goto(`${process.env.BASE_URL}${url}`, {
                timeout: 60000,             // Increase timeout to 60 seconds
                waitUntil: 'domcontentloaded' // Wait only for DOM to be ready, not full network idle
            });
        }
    }
        
    

    

    async navigateToLoginPage(){
        await this.page.waitForLoadState('networkidle');
        await this.signinLink.click();
        await this.page.waitForLoadState('networkidle');
        
    }
    

  
}