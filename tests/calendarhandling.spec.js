const {test, expect} = require("@playwright/test");

test("Calendar Handling", async ({page}) => {
        const month = "9";
        const day = "7";
        const year = "2027";
        const expected =[month, day, year]

        await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

        await page.locator(".react-date-picker__inputGroup").click();
        await page.locator(".react-calendar__navigation__label").click();
        await page.locator(".react-calendar__navigation__label").click();
        await page.getByText(year).click();
        await page.locator(".react-calendar__year-view__months__month").nth(Number(month-1)).click();
        await page.locator("//abbr[text()='"+day+"']").click();

        const inputs = await page.locator(".react-date-picker__inputGroup__input");

        for(let i=0; i< expected.length; i++)
        {
            const value = await inputs.nth(i).inputValue();
            expect(value).toEqual(expected[i]);

        }





})