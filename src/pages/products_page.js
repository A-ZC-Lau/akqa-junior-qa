// webdriver imported by BasePage
const BasePage = require("./base_page");

class ProductDetailsPage extends BasePage
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
        let products = await this.driver.findElements(this.webdriver.By.css("section.product-list > article"));
        return products;
    }



    async getProductsCount ()
    {
        let products = await this.getProducts();
        return products.length;
    }



    async clickRandomProduct ()
    {
        let products = await this.getProducts();
        if (products.length < 0)
        {
            throw Error("no products");
        }
        let selected_index = Math.floor(Math.random() * products.length);
        await products[selected_index].click();
    }
}

module.exports = ProductDetailsPage;