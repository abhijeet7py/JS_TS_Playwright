const {test, expect} = require('@playwright/test');


test.only("@Web client login", async ({browser, page}) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.locator("#userEmail").fill("abhijeet77@gmail.com");
    await page.locator("#userPassword").fill("Abhij@0709");
    await page.locator("#login").click();

    // to wait for the network to be idle
    // await page.waitForLoadState('networkidle');

    // to wait for the element to be visible
    await page.locator(".card-body b").first().waitFor();

    console.log(await page.locator(".card-body b").allTextContents());



})

