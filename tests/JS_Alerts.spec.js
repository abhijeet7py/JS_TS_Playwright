const {test, expect} = require('@playwright/test');

test("Testing JavaScript Alerts", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // Handling Alert
    await page.pause();
    page.on('dialog', dialog => dialog.accept());
    await page.locator("#confirmbtn").click();

    // hoving over the element
    await page.locator("#mousehover").hover();
})