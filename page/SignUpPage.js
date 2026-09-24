import {By } from "selenium-webdriver";
import BasePage from "./index.js";

class SignUpPage extends BasePage {
  constructor() {
    super();
    //Locators
    this.registerLink = By.xpath("//a[contains(@href,'register')]");
    // this.gender = By.xpath("//input[contains(@id,'gender-male')]");
    this.gender = By.id("gender-male");
    this.firstName = By.id("FirstName");
    this.lastName = By.id("LastName");
    this.email = By.id("Email");
    this.password = By.id("Password");
    this.confirmPassword = By.id("ConfirmPassword");
    this.registerButton = By.name("register-button");
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

  async clickRegisterButton() {
    await this.driver.findElement(this.registerButton).click();
  }
}


export {SignUpPage};

