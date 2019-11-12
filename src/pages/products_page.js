class ProductDetailsPage
{
    constructor ({
        driver,
        target_url = "https://www.bunnings.com.au/search/products?q=paint&redirectFrom=Any",
    })
    {
        super({
            driver,
            target_url
        });
    }



    async getProducts ()
    {
        let products = await driver.findElements(this.webdriver.By.css("section.product-list > article"));
        return products;
    }



    async getNumberOfProducts ()
    {
        return await this.getProducts().length;
    }



    async clickRandomProduct ()
    {
        let products = this.getProducts();
        if (products.length < 0)
        {
            throw Error("no products");
        }
        let selected_index = Math.floor(Math.random() * products.length);
        this.clickWhenReady(products[selected_index]);
    }
}

module.exports = ProductDetailsPage;