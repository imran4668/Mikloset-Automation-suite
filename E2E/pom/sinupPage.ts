import { expect, Locator, Page } from '@playwright/test';
import WaitUtils from '../utils/support'; // Import your support class

export default class SignupPage {
  readonly page: Page;
  readonly waitUtils: WaitUtils; // Declare waitUtils

  readonly sinupWithMailButton: Locator;
  readonly googleButton: Locator;
  //signup form
  readonly fullName: Locator;
  readonly email: Locator;
  readonly userName: Locator;
  readonly password: Locator;
  readonly genderFemale: Locator;
  readonly genderMale: Locator;
  readonly genderNeutral: Locator;
  readonly singnUpButton: Locator;
  //dashboard
  readonly succesMsgToast: Locator;
  readonly welcomeMsgToast: Locator;
  //errors
  readonly fullNameError: Locator;
  readonly emailError: Locator;
  readonly userNameError: Locator;
  readonly passwordError: Locator;
  readonly genderError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.waitUtils = new WaitUtils(page); // Initialize WaitUtils

    this.sinupWithMailButton = page.getByTestId("sign_up_with_email_button");
    this.googleButton = page.getByTestId('google_button');
    //signup form
    this.fullName = page.getByTestId("fullName_field_input");
    this.email = page.getByTestId("email_field_input");
    this.userName = page.getByTestId("userName_field_input");
    this.password = page.getByTestId("password_field_input");
    this.genderFemale = page.locator("//label[text()='Female']");
    this.genderMale = page.locator("//label[text()='Male']");
    this.genderNeutral = page.locator("//label[text()='Gender Neutral']");
    this.singnUpButton = page.getByTestId("sign_up_button");
    //dashboard
    this.succesMsgToast = page.getByTestId("sign_up_successful_toaster_message")
    this.welcomeMsgToast = page.getByTestId("welcome_text")
    //errors
    this.fullNameError = page.getByTestId("fullName_field_error_text");
    this.emailError = page.getByTestId("email_field_error_text");
    this.userNameError = page.getByTestId("userName_field_error_text");
    this.passwordError = page.getByTestId("password_field_error_text");
    this.genderError = page.getByTestId("gender_field_error_text");
  }

  async openSignUpForm() {
    await this.waitUtils.click(this.sinupWithMailButton);
  }

  async enterFullName(fullName: string) {
    await this.fullName.fill(fullName);
  }

  async enterMail(mail: string) {
    await this.email.fill(mail);
  }

  async enterUserName(userName: string) {
    await this.userName.fill(userName);
  }

  async enterPassword(password: string) {
    await this.password.fill(password);
  }

  async enterGender(gender: string) {
    if (gender === "male") {
      await this.waitUtils.click(this.genderMale);
    } else if (gender === "female") {
      await this.waitUtils.click(this.genderFemale);
    } else {
      await this.waitUtils.click(this.genderNeutral);
    }
  }

  async pressSignupButton() {
    await this.waitUtils.click(this.singnUpButton);
  }

  async validateErrOrWelcomeMsg(err?: string) {
    err === "User already exits with provided email"
      ? await this.verifyValidationMsg(err)
      : await this.verifyWelcomMsgToast();
  }

  async verifyWelcomMsgToast() {
    // waitUtils.waitForText uses 'toHaveText' (exact match). 
    // Since we need 'toContainText', we stick to expect here for safety, 
    // but use waitUtils for visibility first.
    await this.waitUtils.waitForVisible(this.welcomeMsgToast);
    await expect(this.welcomeMsgToast).toContainText("Welcome");

    await this.waitUtils.waitForVisible(this.succesMsgToast);
    await expect(this.succesMsgToast).toContainText("User Signup successful");
  }

  async verifyDashbard() {
    await this.waitUtils.waitForURLContains('dashboard');
  }

  async verifyButtons(button: string) {
    if (button === "Continue with Google") {
      await this.waitUtils.waitForVisible(this.googleButton);
    } else {
      await this.waitUtils.waitForVisible(this.sinupWithMailButton);
    }
  }

  async verifyFields() {
    await this.waitUtils.waitForVisible(this.fullName);
    await this.waitUtils.waitForVisible(this.email);
    await this.waitUtils.waitForVisible(this.userName);
    await this.waitUtils.waitForVisible(this.password);
  }

  async verifyGenders() {
    await this.waitUtils.waitForVisible(this.genderFemale);
    await this.waitUtils.waitForVisible(this.genderMale);
    await this.waitUtils.waitForVisible(this.genderNeutral);
  }

  async verifySignupButton() {
    await this.waitUtils.waitForVisible(this.singnUpButton);
  }

  async VerifySignupButtonDisable() {
    await this.waitUtils.waitForVisible(this.singnUpButton);
    await expect(this.singnUpButton).toBeDisabled();
  }

  // --- Validation Logic ---

  async verifyValidationMsg(error?: string) {
    if (typeof error === 'string') {
      switch (error) {
        case "Please enter valid email":
        case "User already exits with provided email":
          await this.verifyEmailError(error);
          break;
        case "Password must be minimum 6 characters, including at least letter, 1 numeric and 1 special character":
          await this.verifyPasswordError(error);
          break;
        case "minimum 2 characters":
          await this.verifyUserNameError(error);
          break;
        case "Username already exists":
        case "Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed.":
          await this.verifyUserNameError(error);
          break;
        case "Please select":
          await this.verifyGenderError(error);
          break;
        default:
          throw new Error(`WARNING: Unhandled error message: ${error}`);
      }
    } else {
      await Promise.all([
        this.verifyUserNameError(),
        this.verifyEmailError(),
        this.verifyGenderError(),
        this.verifyFullNameError(),
        this.verifyPasswordError()
      ]);
    }
  }

  async verifyUserNameError(error?: string) {
    await this.waitUtils.waitForVisible(this.userNameError);
    if (error) await expect(this.userNameError).toContainText(error);
  }

  async verifyFullNameError(error?: string) {
    await this.waitUtils.waitForVisible(this.fullNameError);
    if (error) await expect(this.fullNameError).toContainText(error);
  }

  async verifyEmailError(error?: string) {
    await this.waitUtils.waitForVisible(this.emailError);
    if (error) await expect(this.emailError).toContainText(error);
  }

  async verifyGenderError(error?: string) {
    await this.waitUtils.waitForVisible(this.genderError);
    if (error) await expect(this.genderError).toContainText(error);
  }

  async verifyPasswordError(error?: string) {
    await this.waitUtils.waitForVisible(this.passwordError);
    if (error) await expect(this.passwordError).toContainText(error);
  }
}