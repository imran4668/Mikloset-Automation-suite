import { Locator, Page, expect } from "@playwright/test";
import WaitUtils from '../utils/support';

export class LoginPage {
    readonly page: Page;
    readonly waitUtils: WaitUtils; // Add WaitUtils

    readonly userNameOrEmail: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly passErrors: Locator;
    readonly userNameErrors: Locator;
    readonly welcomeMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.waitUtils = new WaitUtils(page);

        this.userNameOrEmail = page.getByTestId('email_field_input');
        this.password = page.getByTestId('password_field_input');
        this.loginButton = page.getByTestId('login_button');
        this.passErrors = page.getByTestId('password_field_error_text');
        this.userNameErrors = page.getByTestId('email_field_error_text');
        // Added locator for Welcome message
        this.welcomeMessage = page.locator('//p[contains(text(),"Welcome")]');
    }

    async login(username: string, password: string) {
        // await this.page.pause();
        // .fill() has built-in waiting, but we can ensure visibility first
        console.log("Filling in login detailsb strrat");
        await this.waitUtils.waitForVisible(this.userNameOrEmail);
        console.log("Filling in login details");
        await this.userNameOrEmail.fill(username);

        await this.password.fill(password);
        console.log("Clicking login button");

        // Removed hardcoded waitForTimeout(2000). 
        // waitUtils.click() handles waiting for the button to be enabled/clickable.
        await this.waitUtils.click(this.loginButton);
    }

    async validateLoginSuccess() {
        await this.waitUtils.waitForVisible(this.welcomeMessage);
        await expect(this.welcomeMessage).toBeVisible();
    }

    async validateLoginButton() {
        await this.waitUtils.waitForVisible(this.loginButton);
        await expect(this.loginButton).toBeDisabled();
    }

    async pressLoginButton() {
        await this.waitUtils.click(this.loginButton);
    }

    // --- Validation Logic (Controller) ---
    // This replaces the complex if/else in your step definitions
    async verifyErrorMsg(error: string) {
        // Normalize the error string slightly if needed (trim)
        const err = error.trim();

        switch (err) {
            case "Password is not Valid":
            case "Please enter a Password":
                await this.validatePasswordErrors(err);
                break;

            case "No account created":
            case "No Account created": // Handle case differences
            case "Please enter a Email or UserName":
            case "invalid input":
                await this.validateUserNameErrors(err);
                break;

            default:
                // Fallback: check both or throw warning
                throw new Error(`Unhandled error message in verifyErrorMsg: "${err}"`);
        }
    }

    async validatePasswordErrors(error: string) {
        await this.waitUtils.waitForVisible(this.passErrors);
        await expect(this.passErrors).toContainText(error);
    }

    async validateUserNameErrors(error: string) {
        await this.waitUtils.waitForVisible(this.userNameErrors);
        await expect(this.userNameErrors).toContainText(error);
    }
}