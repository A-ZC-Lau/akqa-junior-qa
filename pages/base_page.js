const webdriver = require("selenium-webdriver")

class BasePage
{
    constructor ({
        driver,
    })
    {
        this.webdriver = webdriver
        this.driver = driver
    }

    async navagateTo (target_url)
    {
        await this.driver.navigate().to(target_url);
    }

    async clickWhenReady (element)
    {
        await driver.wait(this.webdriver.until.elementIsVisible(element))
        await driver.wait(this.webdriver.until.elementIsEnabled(element))
        await element.click();
    }
}

module.exports = BasePage