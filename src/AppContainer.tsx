import App from './App'
import ThemeProvider from './theme'
import { ThemeSettingProvider } from './common/contexts/ThemeSettingContext'

export default function AppContainer() {
  return (
    <ThemeSettingProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ThemeSettingProvider>
  )
}
