import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('admin', 'admin123');

  await loginPage.verifySuccessfulLogin();
});

test('user cannot login with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('admin', 'wrong123');

  await loginPage.verifyLoginError();
});

test('user cannot login with invalid username', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('wronguser', 'admin123');

  await loginPage.verifyLoginError();
});

test('user cannot login without username', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('', 'admin123');

  await loginPage.verifyUsernameRequired();
});

test('user cannot login without password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('admin', '');

  await loginPage.verifyPasswordRequired();
});