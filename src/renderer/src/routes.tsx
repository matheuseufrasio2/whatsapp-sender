import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { UserSettings } from './pages/UserSettings/UserSettings'

export function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/user-settings" Component={UserSettings} />
      </Routes>
    </BrowserRouter>
  )
}
