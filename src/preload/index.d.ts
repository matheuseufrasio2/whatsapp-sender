import { ElectronAPI } from '@electron-toolkit/preload'
import { Api } from '../api/index'

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}
