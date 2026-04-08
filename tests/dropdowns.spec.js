const {test, expect} = require('@playwright/test');


test.only("Handling Dropdowns", async ({browser, page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator("#username");
    const password = page.locator("#password");
    const dropdown = page.locator("select.form-control");

    // To selct a radio button
    await page.locator(".radiotextsty").last().click();

    await page.locator("#okayBtn").click();

    // To check if a radiobutton is checked or not
    console.log(await page.locator(".radiotextsty").last().isChecked());

    // assertion to check if the radiobutton is checked or not
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    
    // to select the option from the dropdown
    await dropdown.selectOption("consult");

    // To Select is Checkbox is checked or not
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();

    // to uncheck the checkbox
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    // Adding assertion to check if a attribute has a value or not
    const blinkingLink = page.locator("[href*='documents-request']");
    await expect(blinkingLink).toHaveAttribute("class", "blinkingText")




    //await page.pause();

})