const {test, expect} = require('@playwright/test');

test.only("Locators in Playwright", async ({ browser, page }) =>
    {
    // const context = await browser.newContext();
    //const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // Plawright have CSS selector and Xpath Selector, 
    // but it is recommended to use CSS selector as 
    // it is faster than Xpath selector.

    // fill() method is used to fill the input field with the specified value.
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("[type='password']").fill("Learning@830$3mK2");

    // click() method is used to click on the element.
    await page.locator("#signInBtn").click();




});