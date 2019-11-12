const webdriver = require("selenium-webdriver");

const ProductsPage = require("@/products_page");
const ProductDetailsPage = require("@/product_details");
const WishlistPage = require("@/wishlist");

const driver = new webdriver.Builder()
    .forBrowser("chrome")
    .build();



describe(
    "bunnings test",
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
                        let result = await products_page.loadPage();
                        expect(result).toBe(true);
                    },
                    30000
                );

                it(
                    "has more than 0 products",
                    async function ()
                    {
                        let count = await products_page.getProductsCount();
                        expect(count).toBeGreaterThan(0);
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
                        let result = await product_details_page.clickWishlistButton();
                        expect(result).toBe(true);
                    },
                    30000
                );

                it(
                    "can load wishlist page",
                    async function ()
                    {
                        let result = await product_details_page.loadPage();
                        expect(result).toBe(true);
                    }
                );
            }
        );

        describe(
            "WishlistPage",
            function ()
            {

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