import React, { memo } from 'react'
import { FiX, FiMinus, FiMaximize2, FiSquare } from 'react-icons/fi'

// import { useConfig } from '@renderer/hooks/useConfig'
import { Container, WindowActions, MacActionButton, DefaultActionButton } from './styles'

const Header: React.FC = () => {
  const handleCloseWindow = async (): Promise<void> => {
    await window.electron.ipcRenderer.invoke('handleWindowClose')
  }

  const handleMaximize = async (): Promise<void> => {
    await window.electron.ipcRenderer.invoke('handleWindowMaximize')
  }

  const handleMinimize = async (): Promise<void> => {
    await window.electron.ipcRenderer.invoke('handleWindowMinimize')
  }

  // const useMacOSWindowActionButtons = useConfig('useMacOSWindowActionButtons')

  // const shouldUseMacOSWindowActions = useMemo(() => {
  //   return useMacOSWindowActionButtons || process.platform === 'darwin'
  // }, [useMacOSWindowActionButtons])

  const shouldUseMacOSWindowActions = true

  return (
    <Container>
      <strong>Whatsapp sender</strong>

      {shouldUseMacOSWindowActions ? (
        <WindowActions position="left" shouldShowIconsOnHover>
          <MacActionButton color="close" onClick={handleCloseWindow}>
            <FiX />
          </MacActionButton>
          <MacActionButton color="minimize" onClick={handleMinimize}>
            <FiMinus />
          </MacActionButton>
          <MacActionButton color="maximize" onClick={handleMaximize}>
            <FiMaximize2 />
          </MacActionButton>
        </WindowActions>
      ) : (
        <WindowActions position="right">
          <DefaultActionButton onClick={handleMinimize}>
            <FiMinus />
          </DefaultActionButton>
          <DefaultActionButton onClick={handleMaximize}>
            <FiSquare />
          </DefaultActionButton>
          <DefaultActionButton onClick={handleCloseWindow}>
            <FiX />
          </DefaultActionButton>
        </WindowActions>
      )}
    </Container>
  )
}

export default memo(Header)
