import {LoginPage} from "../page/LoginPage.js";

const pages = new LoginPage();

await pages.browserOpen("https://demowebshop.tricentis.com/");
await pages.clickLoginLink();
await pages.enterEmail("tahirAbsar@gmail.com");
await pages.enterPassword("@Password123");
await pages.clickRememberMe();
await pages.clickLoginButton();
await pages.driver.sleep(3000);
await pages.browserClose();