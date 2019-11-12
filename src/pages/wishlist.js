// webdriver imported by BasePage
const BasePage = require("./base_page");

class WishlistPage extends BasePage
{
    constructor ({
        driver,
        target_url = ""
    })
    {
        super({
            driver,
            target_url
        });
    }



    async getProductsCount ()
    {
        let selector = {
            css: "strong[data-role=wish-list-item-count]"
        };
        let element = await this.driver.findElement(selector);
        let text = await element.getText();
        let count = text.match(/\d+/)[0];
        return count;
    }
}

module.exports = WishlistPage;