import {By } from "selenium-webdriver";
import BasePage from "./index.js";

class LoginPage extends BasePage {
  constructor() {
    super();
    //Locators
    this.loginLink = By.xpath("//a[contains(@href,'login')]");
    this.email = By.id("Email");
    this.password = By.id("Password");
    this.rememberMe = By.id("RememberMe");
    this.loginButton = By.xpath("//input[contains(@class,'login-button')]");
  }

  async clickLoginLink() {
    await this.driver.findElement(this.loginLink).click();
  }

  async enterEmail(email) {
    await this.driver.findElement(this.email).sendKeys(email);
  }

  async enterPassword(password) {
    await this.driver.findElement(this.password).sendKeys(password);
  }
  async clickRememberMe() {
    await this.driver.findElement(this.rememberMe).click();
  }

  async clickLoginButton() {
    await this.driver.findElement(this.loginButton).click();
  }
}

export {LoginPage};
