const {test} = require('@playwright/test');

// browser is a global fixture provided by Playwright Test, 
// which is used to create a new browser instance for each test.
// It should be wrapped in curly braces {} to destructure 
// the browser object from the test context.

// Which browser to use is determined by the configuration file 
// (playwright.config.js)

test('Playwright test', async ({browser})=> 
{
    // creating a browser context
    const context = await browser.newContext();

    // creating a new page in the browser context
    const page = await context.newPage();

    // navigating to the specified URL
    await page.goto("https://katalon-demo-cura.herokuapp.com/#")
});

// If we dont have any browser context/page, then we can directly use the browser object to navigate to the URL,
// but it is not recommended as it will create a new browser instance for each test, which will be time-consuming
//  and resource-intensive.

test('Playwright test without broser context', async ({browser,page})=>
{
    // navigating to the specified URL
    await page.goto("https://katalon-demo-cura.herokuapp.com/#")
})