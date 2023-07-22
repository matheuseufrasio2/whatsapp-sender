import { ThemeProvider } from 'styled-components'
import { AppContainer } from './App.styled'
import { AppRoutes } from './routes'
import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyles'
import Header from './components/Header/Header'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Header />
        <AppRoutes />
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
