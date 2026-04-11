const {test, expect} = require('@playwright/test');

test("Special Locators in Playwright", async ({browser, page}) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    // locating element with label text
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    // await page.getByLabel("Employed").uncheck();
    await page.getByLabel("Gender").selectOption("Female");

    // locating element with placeholder text
    await page.getByPlaceholder("Password").fill("Abhij@0709");

    // locating element with role
    await page.getByRole("button", {name: 'Submit'}).click();

    // locating element with text content
    const mesg =await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    expect(mesg).toBeTruthy();

    // locating element with the help of its text content and role
    await page.getByRole("link", {name: "Shop"}).click();

    // locating element with Filter method
    await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();


})

