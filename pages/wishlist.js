class WishlistPage
{
    constructor (
        driver,
        target_url = ""
    )
    {
        this.driver = driver;
        this.target_url = target_url;
    }



    async getProductsLength ()
    {
        let element = this.webdriver.By.css("strong[data-role=wish-list-item-count]");
        let text = await this.driver.findElement(element).getText();
        let count = text.match(/\d+/);
        return count;
    }
}

module.exports = WishlistPage;