const {test, expect} = require('@playwright/test');
// const { text } = require('node:stream/consumers');

test("Handling Multiple Tabs in Playwright", async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const username = page.locator("#username");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const documentLink = page.locator("[href*='documents-request']");

    // To handle the new tab opened by clicking on the link

    const [newPage] = await Promise.all([
        
        context.waitForEvent('page'),
        documentLink.click()

    ])

    const texts = await newPage.locator(".red").textContent();
    // expect(text).toBe("Please email us at mentor@rahulshettyacademy.com with below template to receive response");
    console.log(texts);

    // To get the email id from the text

    const arrText = texts.split("@");
    const domain = arrText[1].split(" ")[0];
    // console.log(domain);

    // To again switch to the parent tab
    await username.fill(domain)

    // textContent() method is used to get the text content of the element when page is loaded 
    // but inputValue() method is used to get the value of the input field when page is loaded and 
    // after filling the input field with some value.
    // console.log(await username.textContent());

    console.log(await username.inputValue());
    // await page.pause();



   
})
