import { Browser, Builder } from "selenium-webdriver";

class BasePage {
  constructor() {
    this.driver = new Builder().forBrowser(Browser.CHROME).build();
    this.driver.manage().window().maximize();
  }
  
  //browser open method
  async browserOpen(url) {
    await this.driver.get(url);
  }

  //browser close method
  async browserClose() {
    await this.driver.quit();
  }
}

export default BasePage;
