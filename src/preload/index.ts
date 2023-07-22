import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

import { api } from '../api'

// export type Api = typeof api

// let driver: WebDriver

// const api = {
//   sendMessage: (): string => process.versions.node,
//   createGlobalDriver: async (): Promise<void> => {
//     driver = await new Builder().forBrowser(Browser.CHROME).build()
//   },
//   openWhatsapp: async (): Promise<void> => {
//     await driver.get('https://web.whatsapp.com/')
//     await driver.wait(until.elementLocated(By.css("h1[data-testid='intro-title']")))
//     await waitInSeconds(5)
//   }
// }

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
