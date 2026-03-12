const {test, expect} = require('@playwright/test');

// Creating a assertion to check the page title
test("Get Page titile", async ({browser, page})=>
{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    // Assertion to check the page title
    await expect(page).toHaveTitle("Google");
})