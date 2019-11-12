const {Builder, By, Key, until} = require('selenium-webdriver');

async function setup ()
{
    let driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions()
        .build();
    await driver
        .get("https://www.bunnings.com.au/search/products?q=paint&redirectFrom=Any");
    driver // ! delete me
        .takeScreenshot()

    let products = await driver
        .findElements(By.css("article.product-list > article"));
    let selection = Math.floor(
            Math.random() * products.length
        );
    await products[selection].click();
    
    let wishlist_locator = By
        .css("button[buttonstyle=secondary]");
    await driver
        .wait(until.elementLocated(wishlist_locator));
    let wishlist_button = await driver
        .findElement(wishlist_locator);
    driver // ! delete me
        .takeScreenshot()
    await wishlist_button
        .click();

    let wishlist_tooltip = By
        .css("tooltip-wishlist-confirmation__container")
    await driver
        .wait(until.elementLocated(wishlist_tooltip));
    driver // ! delete me
        .takeScreenshot()

    
}

setup()


