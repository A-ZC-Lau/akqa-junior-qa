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



    async loadPage ()
    {
        await this.driver.get(this.target_url);
    }



    async clickWhenReady (selector)
    {
        await driver.wait(this.webdriver.until.elementIsVisible(selector));
        let target = await driver.wait(this.webdriver.until.elementIsEnabled(selector));
        await target.click();
    }
}

module.exports = BasePage;