import { BrowserWindow, ipcMain, screen } from 'electron'
import { schema, config } from '../store/config'

type Schema = typeof schema

const handleWindowMaximize = (mainWindow: BrowserWindow): void => {
  const isMacSystem = process.platform === 'darwin'
  if (isMacSystem) {
    mainWindow.setFullScreen(!mainWindow.isFullScreen())
  } else {
    const { width: currentWidth, height: currentHeight } = mainWindow.getBounds()
    const { width: maxWidth, height: maxHeight } = screen.getPrimaryDisplay().workAreaSize
    const isMaximized = currentWidth === maxWidth && currentHeight === maxHeight

    if (!isMaximized) {
      mainWindow.maximize()
    } else {
      mainWindow.unmaximize()
    }
  }
}

const handleWindowClose = (mainWindow: BrowserWindow): void => {
  mainWindow.close()
}

const handleWindowMinimize = (mainWindow: BrowserWindow): void => {
  mainWindow.minimize()
}

const initializeWindowManager = (mainWindow: BrowserWindow): void => {
  ipcMain.handle('handleWindowMaximize', () => handleWindowMaximize(mainWindow))
  ipcMain.handle('handleWindowClose', () => handleWindowClose(mainWindow))
  ipcMain.handle('handleWindowMinimize', () => handleWindowMinimize(mainWindow))
}

export { initializeWindowManager }
