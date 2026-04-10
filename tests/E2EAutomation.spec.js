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

    await page.locator("input[value='4542 9931 9292 2293']").fill("1234 5668 7890 4567");
    await(page.locator("select[class='input ddl']")).first().selectOption("07");
    await(page.locator("select[class='input ddl']")).last().selectOption("28");
    await page.locator("div[class='field small'] [type='text']").first().fill("1234");
    await page.locator("div[class='field'] [type='text']").last().fill("Abhijeet Kumar");
    await page.locator("div[class='field small'] [type='text']").last().fill("rahulshettyacademy");
    await page.locator("div[class='field small'] button").click();
    const couponText = await page.locator(".mt-1.ng-star-inserted").textContent();
    console.log(couponText);
    expect(page.locator(".mt-1.ng-star-inserted")).toHaveText("* Coupon Applied");
    expect(page.locator("label[type='text']")).toHaveText("abhijeet77@gmail.com");
    await page.locator(".action__submit").click();

    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderID);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr").count();

    for(let i=0; i<rows; i++){
        const rowId = await page.locator("tbody tr").nth(i).locator("th").textContent();
        if(orderID.includes(rowId))
        {
            await page.locator("tbody tr").nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderID.includes(orderIdDetails)).toBeTruthy();








    

   
    












    // await page.pause();
})