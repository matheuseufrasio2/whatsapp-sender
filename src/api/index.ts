import { Browser, Builder, By, Key, WebDriver, until } from 'selenium-webdriver'
import { waitInSeconds } from '../helpers/waitInSeconds'
import { clipboard } from 'electron'

export type Api = typeof api

let driver: WebDriver

export const api = {
  sendMessage: (): string => process.versions.node,
  createGlobalDriver: async (): Promise<void> => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
  },
  openWhatsapp: async (names: string[], message: string): Promise<void> => {
    await driver.get('https://web.whatsapp.com/')
    await driver.wait(until.elementLocated(By.css("h1[data-testid='intro-title']")))
    await waitInSeconds(2)
    await driver.findElement(By.className('g0rxnol2 ln8gz9je lexical-rich-text-input')).click()
    await waitInSeconds(2)
    // copy message to clipboard
    clipboard.writeText(message)
    // a partir daqui tem que fazer for each
    for (let index = 0; index < names.length; index++) {
      const name = names[index]
      await driver.actions().sendKeys(name).perform()
      await waitInSeconds(2)
      await driver.findElement(By.css("span[title='" + name + "']")).click()
      await waitInSeconds(2)

      // send message
      await driver.actions().keyDown(Key.CONTROL).sendKeys('v').perform()
      await driver.actions().sendKeys(Key.ENTER).perform()
      await waitInSeconds(1)
    }

    // after sending all messages clear the clipboard
    clipboard.clear()
  }
  // openWhatsapp: async (names: string[], lines: string[]): Promise<void> => {
  //   await driver.get('https://web.whatsapp.com/')
  //   await driver.wait(until.elementLocated(By.css("h1[data-testid='intro-title']")))
  //   await waitInSeconds(2)
  //   await driver.findElement(By.className('g0rxnol2 ln8gz9je lexical-rich-text-input')).click()
  //   await waitInSeconds(2)
  //   // a partir daqui tem que fazer for each
  //   await driver.actions().sendKeys(names[0]).perform()
  //   await waitInSeconds(2)
  //   await driver.findElement(By.css("span[title='" + names[0] + "']")).click()
  //   await waitInSeconds(2)

  //   // send message
  //   for (let i = 0; i < lines.length; i++) {
  //     const line = lines[i]
  //     if (i !== 0) {
  //       await driver.actions().keyDown(Key.SHIFT).sendKeys(Key.RETURN).perform()
  //     }
  //     // await driver.actions({ bridge: true }).sendKeys(line).perform() todo: funciona mas escreve tudo em capslock
  //     clipboard.wrtie(line)
  //     await driver.actions().keyDown(Key.CONTROL).sendKeys('v').perform()
  //     clipboard.clear()
  //     await waitInSeconds(1)
  //   }
  //   // await driver.actions().sendKeys(message).perform()
  // }
}
