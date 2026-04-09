const {test, expect} = require('@playwright/test')


test("End to End Automation practise", async ({browser, page}) => {

    const products = page.locator(".card-body");
    const productName = "iphone 13 pro";

    // To Navigate to the URL
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    // To get the locator of the email and password field and fill the details
    await page.locator("#userEmail").fill("abhijeet77@gmail.com");
    await page.locator("#userPassword").fill("Abhij@0709");
    // To click on the login button
    await page.locator("[value='Login']").click();

    // To wait for the network to be idle
    await page.waitForLoadState('networkidle');

    // Wait for the products to be visible
    await products.first().waitFor();


    const count = await products.count();
    for(let i=0; i < count; i++)
    {// locator chaining to get the product name and compare it with the required product name
        if(await products.nth(i).locator("b").textContent() == productName)
            {
                // Click on the Add to Cart button
                //locating an element with the help of its text content
                await products.nth(i).locator("text= Add To Cart").click();
                break;

        }
    }
    // To Check if the product is added to the cart or not
    await page.locator("[class='btn btn-custom'] label").waitFor();
    const text = await page.locator("[class='btn btn-custom'] label").textContent();
    console.log(text);
    expect(text).toBe("1");

    // Click on the cart button
    await page.locator("[routerlink*='cart']").click();

    // Wait for list of products in the cart to be visible
    await page.locator("div li").first().waitFor();

    // To Check if the product is added to the cart or not
    const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
    // toBeTruthy() method is used to check if the value is true or not
    expect(bool).toBeTruthy();
    console.log(bool);

    // Click on the checkout button
    await page.locator("text=Checkout").click();
    
    expect(page.locator(".item__title")).toHaveText(" iphone 13 pro ");

    // To fill the country name in the input field

    // Handling Auto-suggest Dropdown

    await page.locator("[placeholder*='Country']").pressSequentially("ind");

    const dropdown = await page.locator(".ta-results")
    await dropdown.waitFor();
    const options = await dropdown.locator("button").count();

    for(let i = 0; i < options; i++){
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === " India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }







    

   
    












    await page.pause();
})