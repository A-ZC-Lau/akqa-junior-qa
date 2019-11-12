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
        let wishlist_locator = this.webdriver.By.css("button[buttonstyle=secondary]");
        await driver.wait(until.elementLocated(wishlist_locator));
        let wishlist_button = await driver.findElement(wishlist_locator);
        await wishlist_button.click();
        let wishlist_tooltip = this.webdriver.By.css("div.tooltip-wishlist-confirmation__container");
        // we wait until the tooltip shows, indicating it has been saved onto wishlist
        await driver.wait(until.elementLocated(wishlist_tooltip));
    }
}

module.exports = ProductDetailsPage;