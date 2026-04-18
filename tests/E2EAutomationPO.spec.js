const {test, expect} = require('@playwright/test');
const { Logipage } = require('../pageobjects/loginpage');
const { DashboardPage } = require('../pageobjects/DashboardPage');


test("End to End Automation practise", async ({browser, page}) => {

    const products = page.locator(".card-body");
    const productName = "iphone 13 pro";


    // To use the page object model to login to the application
    const loginpage = new Logipage(page);
    await loginpage.goTo();
    await loginpage.validLogin("abhijeet77@gmail.com", "Abhij@0709");

    const dashboardpage = new DashboardPage(page);
    await dashboardpage.searchandaddproduct(productName);
    // await dashboardpage.verifycart();
    expect(await dashboardpage.verifycart()).toBe("1");
    await dashboardpage.gotocart();

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