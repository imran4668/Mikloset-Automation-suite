  import { Locator, Page, expect } from '@playwright/test';
  import { promises } from 'dns';
  import { read } from 'fs';

  export default class dashboardPage {
    readonly page: Page;
    //background
    readonly backgroundImage: Locator;
    backgroundImageUrl?: string | null;
    readonly backgroundFemale: string;
    readonly backgroundMale: string;
    readonly backgroundNeutral: string;
    //footer sections
    readonly aboutUs: Locator;
    readonly contactUs: Locator;
    readonly faq: Locator;
    readonly privacyPolicy: Locator;
    readonly termsAndCondition: Locator;
    readonly dontSellMyInfo: Locator;
    readonly limitUseOfpersonalInfo: Locator;
    readonly copyrightText: Locator;
    //header sections
    readonly homeHeader: Locator;
    readonly addYourItemsHeader: Locator;
    readonly styleMeHeader: Locator;
    readonly curateMeHeader: Locator;
    readonly folloeMeHeader: Locator;
    //success messages
    readonly successMessage: Locator;
    //follower details
    readonly followerLength: Locator;
    readonly follower: Locator;
    readonly followingLength: Locator;
    readonly following: Locator;
    readonly followRequestLength: Locator;
    readonly followRequest: Locator;
    //steps section 
    readonly stepTitle: Locator;
    readonly stepTitle1: Locator;
    readonly stepSubtitle: Locator;
    //step1
    readonly step1Title: Locator;
    readonly step1Description: Locator;
    readonly step1Description2: string;
    readonly step1Button: Locator;
    readonly step1menu1: Locator;
    readonly step1menu2: Locator
    readonly step1menu3: Locator;

    //step2
    readonly step2Title: Locator;
    readonly step2Description: Locator;
    readonly step2Description2: string;
    readonly step2Button: Locator;
    //step3
    readonly step3Title: Locator;
    readonly step3Description: Locator;
    readonly step3Description2: string;
    readonly step3Button: Locator;
    //toast message
    readonly mailCopiedToastMessage: Locator;
    //view all link
    readonly viewAllLink: Locator;
    //categories Image Edit option in mobile and desktop
    readonly editOptionInMobile: Locator;
    readonly editOptionInDesktop: Locator;
    readonly hoverAccessoriesCategory: Locator;
    readonly editPopupOption: Locator;
    readonly changeImageOption!: string;
    readonly saveChangeImage: Locator;








    constructor(page: Page) {
      this.page = page;
      //background
      this.backgroundImage = page.getByTestId("dashboard_background_image");
      this.backgroundFemale = "https://d165yxf2dgd7o5.cloudfront.net/newDashBoardImage.webp";
      this.backgroundMale = "https://d165yxf2dgd7o5.cloudfront.net/menNewDashBoardImage.webp";
      this.backgroundNeutral = "https://d165yxf2dgd7o5.cloudfront.net/GNNewDashBoardImage.webp";
      //footer sections
      this.aboutUs = page.getByTestId("about_us_link");
      this.contactUs = page.getByTestId("contact_us_link");
      this.faq = page.getByTestId("faq_link");
      this.privacyPolicy = page.getByTestId("privacy_policy_link");
      this.termsAndCondition = page.getByTestId("terms_and_conditions_link");
      this.dontSellMyInfo = page.getByTestId("my_info_link");
      this.limitUseOfpersonalInfo = page.getByTestId("limit_personal_info_link");
      this.copyrightText = page.getByText("©2025 FashionForwardInnovations, LLC. All rights reserved.");
      //header sections
      this.homeHeader = page.getByTestId("home_name");
      this.addYourItemsHeader = page.getByTestId("addYourStyle_name");
      this.styleMeHeader = page.getByTestId("styleMe_name");
      this.curateMeHeader = page.getByTestId("curateMe_name");
      this.folloeMeHeader = page.getByTestId("followMe_name");
      //success messages
      this.successMessage = page.locator("//p[@data-testid='welcome_text']")
      //follower details
      this.followerLength = page.getByTestId("followers_list_length");
      this.follower = page.getByTestId("followers_text");
      this.followingLength = page.getByTestId("following_list_length");
      this.following = page.getByTestId("following_text");
      this.followRequestLength = page.getByTestId("follow_request_list_length");
      this.followRequest = page.getByTestId("follow_request_text");
      //steps section
      this.stepTitle = page.getByTestId("header_text");
      this.stepTitle1 = page.getByTestId('//p[@data-testid="header_text"]/span');
      this.stepSubtitle = page.getByTestId("sub_header_text");
      //step1
      this.step1Title = page.getByTestId("step_1_title_text");
      this.step1Description = page.getByTestId("step_1_info_text");
      this.step1Description2 = "Start by importing clothes, accessories, and inventory from your closet. Everything you need in one place. For more information see user guide."
      this.step1Button = page.getByTestId("step_1_button");
      this.step1menu1 = page.getByTestId("step_1_forward_receipts_option");
      this.step1menu2 = page.getByTestId("step_1_add_items_option");
      this.step1menu3 = page.getByTestId("step_1_upload_item_option");

      //step2
      this.step2Title = page.getByTestId("step_2_title_text");
      this.step2Description = page.getByTestId("step_2_info_text");
      this.step2Description2 = "Mix and match your items or use our AI styling tool to find the perfect combinations. For more information see user guide."
      this.step2Button = page.getByTestId("step_2_button");
      //step3
      this.step3Title = page.getByTestId("step_3_title_text");
      this.step3Description = page.getByTestId("step_3_info_text");
      this.step3Description2 = "Get feedback and inspire others! Post your curated looks and share them with friends. For more information see user guide."
      this.step3Button = page.getByTestId("step_3_button");
      //toast message
      this.mailCopiedToastMessage = page.getByTestId("user_id");
      //view all link
      this.viewAllLink = page.locator("//div[@data-testid='categories_info_text']/a");
      //categories Image Edit option in mobile and desktop
      this.editOptionInMobile = page.getByTestId("mobile_edit_icon");
      this.editOptionInDesktop = page.getByTestId("Accessories_category_desktop_edit_icon");
      this.hoverAccessoriesCategory = page.getByTestId("Accessories_category_name_details");
      this.editPopupOption = page.getByTestId("dashboard_edit_category_pop_up");
      this.saveChangeImage = page.getByTestId("dashboard_edit_category_pop_up_save_button");
      this.changeImageOption = 'cameraLinearIcon';






    }

    async navigateToDashboard() {
      await this.page.goto(`${process.env.BASE_URL}/dashboard`);
      await this.page.waitForLoadState('networkidle');
      await this.page.waitForTimeout(3000);
      console.log(`Mapsd to ${process.env.BASE_URL}/dashboard`);
    }
    async verifyBackgroundImage(gender: string) {

      if (gender === 'female') {
        await this.verifyfemalebackground();
      }
      else if (gender === 'male') {
        await this.verifymalebackground();
      }
      else if (gender === 'neutral') {
        await this.verifyneutralbackground();
      }
      else {
        throw new Error(`Unknown gender: ${gender}`);
      }
    }
    async verifyfemalebackground() {
      this.backgroundImageUrl = await this.backgroundImage.getAttribute('style');
      expect(this.backgroundImageUrl).toContain(this.backgroundFemale);
    }
    async verifymalebackground() {
      this.backgroundImageUrl = await this.backgroundImage.getAttribute('style');
      expect(this.backgroundImageUrl).toContain(this.backgroundMale);
    }
    async verifyneutralbackground() {
      this.backgroundImageUrl = await this.backgroundImage.getAttribute('style');
      expect(this.backgroundImageUrl).toContain(this.backgroundNeutral);
    }
    async verifyCategories(expectedCategories: string[]) {
      for (const category of expectedCategories) {
        console.log(`Verifying category: ${category}`);
        const categoryLocator = this.page.locator(`//div[@data-testid="categories_list"]/div/div/div/p[text()="${category}"]`);
        await expect(categoryLocator).toBeVisible();
        await categoryLocator.click();
        await expect(this.page).toHaveURL(new RegExp(`/category/${category}`));
        await this.page.goBack();
      }
    }
    async verifyFooterLinks(footer: string) {
      // await this.page.waitForLoadState('networkidle');
      await this.page.waitForTimeout(10000)
      await this.aboutUs.scrollIntoViewIfNeeded();
      if(footer==="2025 FashionForwardInnovations, LLC. All rights reserved."){
        await expect(this.copyrightText).toBeVisible();
      }else{
      for (const footers of footer) {
        switch (footers) {
          case "About Us":
            await expect(this.aboutUs).toBeVisible();
            await this.aboutUs.click();
            await expect(this.page).toHaveURL(/aboutus/);
            await this.page.goBack();
            break;
          case "Contact Us":
            await expect(this.contactUs).toBeVisible();
            await this.contactUs.click();
            await expect(this.page).toHaveURL(/contactUs/);
            await this.page.goBack();
            break;
          case "FAQ":
            await expect(this.faq).toBeVisible();
            await this.faq.click();
            await expect(this.page).toHaveURL(/faq/);
            await this.page.goBack();
            break;
          case "Privacy Policy":
            await expect(this.privacyPolicy).toBeVisible();
            await this.privacyPolicy.click();
            await expect(this.page).toHaveURL(/privacy_policy/);
            await this.page.goBack();
            break;
          case "Terms & Conditions":
            await this.aboutUs.scrollIntoViewIfNeeded();
            await expect(this.termsAndCondition).toBeVisible();
            // await this.termsAndCondition.click();
            // await expect(this.page).toHaveURL(/termsandconditions/);
            // await this.page.goBack();
            break;
          case "Don't Sell/Share My Info (California Only)":
            await expect(this.dontSellMyInfo).toBeVisible();
            await this.dontSellMyInfo.click();
            await expect(this.page).toHaveURL("https://app.termly.io/dsar/63dcbf4b-02e5-4961-83f4-388b9300b588");
            await this.page.goBack();
            break;
          case "Limit use of personal information (California Only)":
            await expect(this.limitUseOfpersonalInfo).toBeVisible();
            await this.limitUseOfpersonalInfo.click();
            await expect(this.page).toHaveURL("https://app.termly.io/dsar/63dcbf4b-02e5-4961-83f4-388b9300b588");
            await this.page.goBack();
            break;
          default:
            throw new Error(`Unknown footer link: ${footers}`);
        }
      }}
    }
    async verifyHeaderSections(header1: string, header2: string, header3: string, header4: string) {
      await expect(this.addYourItemsHeader).toHaveText(header1);
      await expect(this.styleMeHeader).toHaveText(header2);
      await expect(this.curateMeHeader).toHaveText(header3);
      await expect(this.folloeMeHeader).toHaveText(header4);
    }
    async verifyheadernavigation(header1: string, header2: string, header3: string, header4: string) {
      const headers = [header1, header2, header3, header4];
      for (const header of headers) {
        switch (header.toLocaleLowerCase()) {
          case "home":
            await expect(this.homeHeader).toBeVisible();
            await this.homeHeader.click();
            await expect(this.page).toHaveURL(/dashboard/);
            break;
          case "add items":
            await expect(this.addYourItemsHeader).toBeVisible();
            await this.addYourItemsHeader.click();
            await expect(this.page).toHaveURL(/addyourstyle/);
            break;
          case "style me":
            await expect(this.styleMeHeader).toBeVisible();
            await this.styleMeHeader.click();
            await expect(this.page).toHaveURL(/styleme/);
            break;
          case "curate me":
            await expect(this.curateMeHeader).toBeVisible();
            await this.curateMeHeader.click();
            await expect(this.page).toHaveURL(/curateme/);
            break;
          case "follow me":
            await expect(this.folloeMeHeader).toBeVisible();
            await this.folloeMeHeader.click();
            await expect(this.page).toHaveURL(/followme/);
            break;
          default:
            await this.homeHeader.click();
            throw new Error(`Unknown header section: ${header}`);
        }
      }

    }
    async verifyWelcomeMessage() {
      await this.homeHeader.click();
      await expect(this.successMessage).toContainText("Welcome");
    }

    async verifyFollowerDetails(follower: string, following: string, followmerequest: string) {
      const followerLengthText = await this.followerLength.textContent();
      const followingLengthText = await this.followingLength.textContent();
      const followRequestLengthText = await this.followRequestLength.textContent();

      const folowme = [follower, following, followmerequest];
      for (const folow of folowme) {
        switch (folow) {
          case follower:
            await this.follower.click();
            await expect(this.page).toHaveURL(/followers/);
            await this.page.goBack();
            break;
          case following:
            await this.following.click();
            await expect(this.page).toHaveURL(/following/);
            await this.page.goBack();
            break;
          case followmerequest:
            await this.followRequest.click();
            await expect(this.page).toHaveURL(/requests/);
            await this.page.goBack();
            break;
          default:
            throw new Error(`Unknown follower detail: ${folow}`);

        }
      }
    }

    async verifyStepTitle() {
      await this.page.pause();
      await this.page.waitForTimeout(2000);
      await this.stepTitle.scrollIntoViewIfNeeded();
      await this.stepTitle.dblclick();
      await expect(this.stepTitle).toHaveText("Your Style Journey in 3 Steps");
      await expect(this.stepSubtitle).toBeVisible();
    }

    async verifyStepDetails(int:number) {
      await this.page.pause();
      switch (int) {
        case 1:
          await expect(this.step1Title).toHaveText("Add Items");
          await expect(this.step1Description).toHaveText(this.step1Description2);
          // await expect(this.step1Button).toHaveText("Add Items");
          await this.step1Button.click();
          break;
        case 2:
          await expect(this.step2Title).toHaveText("Style a Look");
          await expect(this.step2Description).toHaveText(this.step2Description2);
          await expect(this.step2Button).toHaveText("Style a Look");
          await this.step2Button.click();
          await expect(this.page).toHaveURL(/styleme/);
          await this.page.goBack();
          break;
        case 3:
          await expect(this.step3Title).toHaveText("Share Your Looks");
          await expect(this.step3Description).toHaveText(this.step3Description2);
          await expect(this.step3Button).toHaveText("Share Your Looks");
          await this.step3Button.click();
          await expect(this.page).toHaveURL(/profile/);
          await this.page.goBack();
          break;
        default:
          throw new Error(`Unknown step number: ${int}`);
      }
    }
    async verifyStep1MenuOptions(expectedOptions: string) {
      await this.step1Button.scrollIntoViewIfNeeded();
      await this.page.waitForTimeout(2000);
      await this.step1Button.click();
      
      
      switch (expectedOptions) {
        case "Forward Online Receipts":
          await this.step1Button.scrollIntoViewIfNeeded();
          await this.step1Button.click();
          await expect(this.step1menu1).toBeVisible();
          await this.step1menu1.click();
          await expect(this.page).toHaveURL(/dashboard/);
          break;
        case "Add Items from Digital Closet":
          await this.page.pause();
        await this.step1Button.scrollIntoViewIfNeeded();
          await this.step1Button.click();
          await expect(this.step1menu2).toBeVisible();
          await this.step1menu2.click();
          await expect(this.page).toHaveURL(/autoscanreceipts/);
          await this.page.goBack();
          break;
        case "Upload Item Image/URL":
        await this.step1Button.scrollIntoViewIfNeeded();
          // await this.step1Button.click();
          await expect(this.step1menu3).toBeVisible();
          await this.step1menu3.click();
          await expect(this.page).toHaveURL(/uploadfile/);
          // await this.page.goBack();
          break;
        default:
          throw new Error(`Unknown menu option: ${expectedOptions}`);
      }
    } 

    async verifEmailCopiedToastMessage() {
      await this.page.waitForTimeout(8000)
      await expect(this.mailCopiedToastMessage).toBeVisible();
    }

    async verifyNavigationPage(pageName: string) {
      switch (pageName) {
        case "uploadfile":
          await expect(this.page).toHaveURL(/uploadfile/);
          await this.page.goBack();
          break;
        case "Style Me":
          await expect(this.page).toHaveURL(/styleme/);
          await this.page.goBack();
          break;
        case "profile":
          await expect(this.page).toHaveURL(/profile/);
          await this.page.goBack();
          break;
        case "autoscanreceipts":
          await expect(this.page).toHaveURL(/autoscanreceipts/);
          await this.page.goBack();
          break;
        case "uploadfile":
          await expect(this.page).toHaveURL(/uploadfile/);
          await this.page.goBack();
          break;
        default:
          throw new Error(`Unknown page name: ${pageName}`);
      }
    }
    async verifyViewAllLinkForCategories() {
      await this.viewAllLink.scrollIntoViewIfNeeded();
      await expect(this.viewAllLink).toBeVisible();
      await this.viewAllLink.click();
      await expect(this.page).toHaveURL(/myItems/);
    }


    async verifydeviceview(device: string) {
      switch (device.toLowerCase()) {
        case 'mobile':
          await this.page.setViewportSize({ width: 375, height: 667 });
          console.log('✅ Viewport set to mobile dimensions (375x667)');
          

          break;
        case 'desktop':
          await this.page.setViewportSize({ width: 1280, height: 800 });
          console.log('✅ Viewport set to desktop dimensions (1280x800)');
          await this.verifyEditOptionInDesktop();
          break;
        default:
          throw new Error(`Unknown device type: ${device}`);
      }
    } 

    async verifyEditOptionInMobile(){

    }
  async verifyEditOptionInDesktop() {

      // Hover the category
      await this.hoverAccessoriesCategory.scrollIntoViewIfNeeded();
      await this.hoverAccessoriesCategory.hover();

      // Edit option should be visible
      await expect(this.editOptionInDesktop).toBeVisible();

      // Click edit
      await this.editOptionInDesktop.click();

      // Wait for popup
      await this.editPopupOption.waitFor({ state: "visible" });

      // Upload image
    // Step 1: Click the camera icon div
      await this.page.locator('[data-testid="dashboard_edit_category_camera_icon_details"]').click();

      // Step 2: Wait for actual input[type=file]
      const fileInput = this.page.locator('input[type="file"]');
      await fileInput.waitFor({ state: "attached" });

      // Step 3: Upload image
      await fileInput.setInputFiles('/Users/Imran/Desktop/Mikloset/testData/testimage.png');


      // Click Save
      await this.saveChangeImage.click();

      // Wait for popup to close (important)
      await this.editPopupOption.waitFor({ state: "hidden" });
      
  }









    // last brace 
  }