import { Browser, Builder, By } from "selenium-webdriver";

class BasePage {
  constructor() {
    this.driver = new Builder().forBrowser(Browser.CHROME).build();
    this.driver.manage().window().maximize();
   
    this.registerLink = By.xpath("//a[contains(@href,'register')]");
    // this.gender = By.xpath("//input[contains(@id,'gender-male')]");
    this.gender = By.id("gender-male");
    this.firstName = By.id("FirstName");
    this.lastName = By.id("LastName");
    this.email = By.id("Email");
    this.password = By.id("Password");
    this.confirmPassword = By.id("ConfirmPassword");
    
  }
  //browser open method
  async browserOpen(url) {
    await this.driver.get(url);
    // await this.driver.manage().window().maximize();
  }

  async clickRegisterLink() {
    await this.driver.findElement(this.registerLink).click();
  }

  async clickGender() {
    await this.driver.findElement(this.gender).click();
  }

  async enterFirstName() {
    await this.driver.findElement(this.firstName).sendKeys("tahir");
  }

  async enterLastName(lastName) {
    await this.driver.findElement(this.lastName).sendKeys(lastName);
  }

  async enterEmail(email) {
    await this.driver.findElement(this.email).sendKeys(email);
  }

  async enterPassword(password) {
    await this.driver.findElement(this.password).sendKeys(password);
  }

  async enterConfirmPassword(confirmPassword) {
    await this.driver.findElement(this.confirmPassword).sendKeys(confirmPassword);
  }

 

  //browser close method
  async browserClose() {
    await this.driver.quit();
  }
}

const pages = new BasePage();

await pages.browserOpen("https://demowebshop.tricentis.com/");
await pages.clickRegisterLink();
await pages.clickGender();
await pages.enterFirstName();
await pages.enterLastName("Absar");
await pages.enterEmail("tahire@gmail.com");
await pages.enterPassword("Password123");
await pages.enterConfirmPassword("Password123");
await pages.driver.sleep(2000);
await pages.browserClose();

/*
“contains() ব্যবহার করলে পুরো value না মিললেও, value-এর নির্দিষ্ট অংশ মিলিয়ে element খুঁজে পাওয়া যায়।”


১. BasePage → একটা class

২. pages → BasePage class থেকে বানানো object

৩. constructor হলো এমন একটি method, যা object তৈরি হওয়ার সময় automatically চলে। 
pages object বানানোর সাথে সাথে নিজে থেকে চলে

৪. this → বর্তমান BasePage object (pages)

৫. this.driver → pages object-এর ভিতরে driver নামে property তৈরি করে

৬. driver-এর value হিসেবে Chrome WebDriver তৈরি হয়
*/
