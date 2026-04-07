const {test, expect} = require('@playwright/test');

test("Locators in Playwright", async ({ browser, page }) =>
    {
    // const context = await browser.newContext();
    //const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // Plawright have CSS selector and Xpath Selector, 
    // but it is recommended to use CSS selector as 
    // it is faster than Xpath selector.

    // fill() method is used to fill the input field with the specified value.
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[type='password']").fill("Learning@830$3mK2");

    // click() method is used to click on the element.
    await page.locator("#signInBtn").click();

    // textContent() method is used to get the text content of the element.
    console.log(await page.locator("[style *= 'block']").textContent())

    // Assertion to check the error message

    await expect(page.locator("[style *= 'block']")).toContainText("Incorrect");

});

test.only("Locators in playwright with multiple elements", async ({browser, page}) =>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const signInBtn = page.locator("#signInBtn");

    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signInBtn.click();

    // to get the count of the elements
    console.log(await page.locator(".card-body a").count());
    // to get the text content of the first element
    console.log(await page.locator(".card-body a").first().textContent());
    // to get the text content of the nth element
    console.log(await page.locator(".card-body a").nth(1).textContent());

    // To get all the text content of the elements in an array

    const allTitles = await page.locator(".card-body a").allTextContents();
    console.log(allTitles);
})