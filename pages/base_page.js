const webdriver = require("selenium-webdriver");

class BasePage
{
    constructor ({
        driver,
        target_url,
    })
    {
        this.webdriver = webdriver;
        this.driver = driver;
        this.target_url = target_url;
    }



    async loadPage (target_url)
    {
        await this.driver.get(this.target_url);
    }



    async clickWhenReady (element)
    {
        await driver.wait(this.webdriver.until.elementIsVisible(element));
        await driver.wait(this.webdriver.until.elementIsEnabled(element));
        await element.click();
    }
}

module.exports = BasePage;