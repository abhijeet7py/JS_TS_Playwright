class DashboardPage
{
    constructor(page,expect)
    {
        this.page = page;
        this.expect = expect;
        this.products = page.locator(".card-body");
        this.cart = page.locator("[routerlink*='cart']");
    }
    async searchandaddproduct(productName)
    {
    await this.products.first().waitFor();
    const count = await this.products.count();
    for(let i=0; i < count; i++)
    {// locator chaining to get the product name and compare it with the required product name
        if(await this.products.nth(i).locator("b").textContent() == productName)
            {
                // Click on the Add to Cart button
                //locating an element with the help of its text content
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;

        }
    }
}
    async verifycart()
    {    
        await this.page.locator("[class='btn btn-custom'] label").waitFor();
        const text = await this.page.locator("[class='btn btn-custom'] label").textContent();
        return text;
        
    }
    

    async gotocart()
    {
        await this.cart.click();
    }

}
module.exports = {DashboardPage};