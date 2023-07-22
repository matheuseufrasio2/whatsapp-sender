import { Browser, Builder, By, Key, WebDriver, until } from 'selenium-webdriver'
import { waitInSeconds } from '../helpers/waitInSeconds'

export type Api = typeof api

let driver: WebDriver

export const api = {
  sendMessage: (): string => process.versions.node,
  createGlobalDriver: async (): Promise<void> => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
  },
  openWhatsapp: async (): Promise<void> => {
    await driver.get('https://web.whatsapp.com/')
    await driver.wait(until.elementLocated(By.css("h1[data-testid='intro-title']")))
    await waitInSeconds(2)
    await driver.findElement(By.className('g0rxnol2 ln8gz9je lexical-rich-text-input')).click()
    await waitInSeconds(2)
    await driver.actions().keyDown(Key.SHIFT).sendKeys('a').perform()
  }
}
