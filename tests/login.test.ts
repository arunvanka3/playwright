import { chromium, test } from "@playwright/test"

test("Login test website", async () => {

    const brwoser = await chromium.launch({
        headless: false
    });
    const context = await brwoser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("#widget-navbar-217834 > ul > li:nth-child(6) > a > div > span")
    await page.click("#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a > div > span")
    await page.fill("#input-email", "akum@gmail.com")
    await page.fill("#input-password", "welcome")
    await page.click("input[value='Login']")
    await page.waitForTimeout(5000)

    const newContext = await brwoser.newContext();

    const newTab = await newContext.newPage();
    await newTab.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    await newTab.waitForTimeout(5000)

})