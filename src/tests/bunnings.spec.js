const webdriver = require("selenium-webdriver");

const ProductsPage = require("@/products_page");
const ProductDetailsPage = require("@/product_details");
const WishlistPage = require("@/wishlist");

const driver = new webdriver.Builder()
    .forBrowser("chrome")
    .build();



describe(
    "Bunnings test",
    function ()
    {
        let 
            products_page,
            product_details_page,
            wishlist_page;
            


        beforeAll(
            function ()
            {
                products_page = new ProductsPage({
                    driver
                });
                product_details_page = new ProductDetailsPage({
                    driver
                });
                wishlist_page = new WishlistPage({
                    driver
                });
            }
        );

        describe(
            "ProductsPage",
            function ()
            {
                it(
                    "can load page",
                    async function ()
                    {
                        await products_page.loadPage();
                    }
                );

                it(
                    "has more than 0 products",
                    async function ()
                    {
                        let count = await products_page.getProductsCount();
                        expect(count).toBeGreaterThan(0);
                    }
                );

                it(
                    "can click a random product",
                    async function ()
                    {
                        await products_page.clickRandomProduct();
                    }
                );
            }
        );

        describe(
            "ProductDetailsPage",
            function ()
            {
                it(
                    "can click wishlist button",
                    async function ()
                    {
                        await product_details_page.clickWishlistButton();
                    }
                );

                it(
                    "can load wishlist page",
                    async function ()
                    {
                        await product_details_page.loadPage();
                    }
                );
            }
        );

        describe(
            "WishlistPage",
            function ()
            {
                it(
                    "can grab number of wishlist items",
                    async function ()
                    {
                        let count = await wishlist_page.getProductsCount();
                        expect(+count).toBeGreaterThan(0);
                    }
                );
            }
        );

        afterAll(
            async function ()
            {
                await driver.quit();
            }
        );
    }
);