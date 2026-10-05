import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;
  readonly usernameError: Locator;
  readonly passwordError: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.successMessage = page.getByText('Login successful!');
    this.errorMessage = page.getByText('Invalid username or password');

    this.usernameError = page.getByText('Username is required');
    this.passwordError = page.getByText('Password is required');
  }

  async goto() {
    await this.page.goto('http://localhost:5173/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifySuccessfulLogin() {
    await expect(this.successMessage).toBeVisible();
  }

  async verifyLoginError() {
    await expect(this.errorMessage).toBeVisible();
  }

  async verifyUsernameRequired() {
    await expect(this.usernameError).toBeVisible();
  }

  async verifyPasswordRequired() {
    await expect(this.passwordError).toBeVisible();
  }
}