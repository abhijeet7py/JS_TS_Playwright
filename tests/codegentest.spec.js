import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('abhijeet77@gmail.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Abhij@0709');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(2).click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await expect(page.getByRole('heading', { name: 'iphone 13 pro' })).toBeVisible();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await expect(page.locator('section')).toContainText('iphone 13 pro');
});