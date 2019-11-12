require("chromedriver");
const {
    Builder, 
    By,
    until
} = require("selenium-webdriver");

let driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions()
    .build();

async function setup () 
{
    await driver
        .get("https://www.bunnings.com.au/search/products?q=paint&redirectFrom=Any");
    let products = 
        await driver
            .findElements(
                By.css("section.product-list > article")
            );
    if (products.length < 0)
    {
        throw Error("no products");
    }
    let selected_index = Math
        .floor(Math.random() * products.length);
    console.log(products.length);
    console.log(selected_index);
    await driver
        .wait(
            until.elementIsVisible(products[selected_index])
        );
    await driver
        .wait(
            until.elementIsEnabled(products[selected_index])
        );
    await products[selected_index]
        .click();
    
    let selector = By.css("button[buttonstyle=secondary]");
    let css_selector = {
        css: "button[buttonstyle=secondary]" 
    };
    console.log(selector);
    let button =
        await driver
            .wait(until.elementLocated(css_selector));
    console.log(button);
    button.click();
    // let wishlist_button = await driver
    //     .findElement(css_selector);
    //     // .findElement(By.css("button[buttonstyle=secondary]"));
    // await wishlist_button
    //     .click();

    let wishlist_tooltip = By
        .css("div.tooltip-wishlist-confirmation__container");
    await driver
        .wait(until.elementLocated(wishlist_tooltip));

    await driver
        .get("https://www.bunnings.com.au/wish-lists/");
    let wishlist_products = await driver
        .findElements(
            By.css("tr.hproduct")
        );

    console.log(wishlist_products.length);
    driver.quit();
}

setup();