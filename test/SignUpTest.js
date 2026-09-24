import {SignUpPage} from "../page/SignUpPage.js";


const pages = new SignUpPage();

await pages.browserOpen("https://demowebshop.tricentis.com/");
await pages.clickRegisterLink();
await pages.clickGender();
await pages.enterFirstName();
await pages.enterLastName("Absar");
await pages.enterEmail("tahirAbsar@gmail.com");
await pages.enterPassword("@Password123");
await pages.enterConfirmPassword("@Password123");
await pages.clickRegisterButton();
await pages.driver.sleep(2000);
await pages.browserClose();