const webdriver = require("selenium-webdriver");

const ProductsPage = require("@/product_details");
const ProductDetailsPage = require("@/product_details");
const WishlistPage = require("@/wishlist");

const driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setLoggingPrefs(pref)
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
            async function ()
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
            }
        );
    }
);