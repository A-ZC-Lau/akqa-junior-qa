// webdriver imported by BasePage
const BasePage = require("./base_page");

class ProductDetailsPage extends BasePage
{
    constructor ({
        driver,
        target_url = "https://www.bunnings.com.au/wish-lists/"
    })
    {
        super({
            driver, 
            target_url
        });
    }
    


    async clickWishlistButton ()
    {
        let css_selector = {
            css: "button[buttonstyle=secondary]"
        };
        await this.driver.wait(this.webdriver.until.elementLocated(css_selector));

        let wishlist_button = await this.driver.findElement(css_selector);
        await wishlist_button.click();

        let wishlist_tooltip = {
            css: "div.tooltip-wishlist-confirmation__container"
        };
        // we wait until the tooltip shows, indicating it has been saved onto wishlist
        await this.driver.wait(this.webdriver.until.elementLocated(wishlist_tooltip));
        return true;
    }
}

module.exports = ProductDetailsPage;