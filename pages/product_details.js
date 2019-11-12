// webdriver imported by BasePage
const BasePage = require("./base_page");

class ProductDetailsPage extends BasePage
{
    constructor ({
        driver,
    })
    {
        super({
            driver, 
        });
    }
    


    async clickWishlistButton ()
    {
        let wishlist_locator = this.webdriver.By.css("button[buttonstyle=secondary]");
        await driver.wait(until.elementLocated(wishlist_locator));
        let wishlist_button = await driver.findElement(wishlist_locator);
        await wishlist_button.click();
    }
}

module.exports = ProductDetailsPage;