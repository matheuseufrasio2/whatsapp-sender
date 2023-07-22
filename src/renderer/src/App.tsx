import { ThemeProvider } from 'styled-components'
import { AppContainer } from './App.styled'
import { AppRoutes } from './routes'
import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyles'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <AppRoutes />
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
