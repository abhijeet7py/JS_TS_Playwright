const {test, expect} = require('@playwright/test');

test("Testing JavaScript Alerts", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // Switching to frame

    const frames = page.frameLocator("#courses-iframe");
    frames.locator("li a[href = 'lifetime-access']:visible").click();
    const text = await frames.locator(".text h2").textContent();
    console.log(text);
    console.log(text.split(" ")[1]);




})