// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState, useEffect, EffectCallback } from 'react'

// import { schema } from '../../../store/config'

// type Schema = typeof schema

// export function useConfig<K extends keyof Schema>(key: K): Schema[K]['default'] {
//   const defaultValue = (window as any).electron.ipcRenderer.invokeSync('getDefaultConfig', key)
//   const [value, setValue] = useState<Schema[K]['default']>(defaultValue)

//   // useEffect((): ReturnType<EffectCallback> => {
//   //   const unsubscribe = config.onDidChange(key, (newValue) => {
//   //     setValue(newValue as Schema[K]['default'])
//   //   })

//   //   return () => {
//   //     unsubscribe()
//   //   }
//   // }, [key])
//   useEffect(() => {
//     const handleConfigChange = (
//       _event: Electron.IpcRendererEvent,
//       newValue: Schema[K]['default']
//     ): any => {
//       setValue(newValue)
//     }

//     ;(window as any).electron.ipcRenderer.on('configChange', handleConfigChange)

//     return () => {
//       ;(window as any).electron.ipcRenderer.off('configChange', handleConfigChange)
//     }
//   }, [key])

//   return value
// }
