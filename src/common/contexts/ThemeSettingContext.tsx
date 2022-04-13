import { createContext, ReactNode, useState } from 'react'

type ModeType = 'light' | 'dark'

type ThemeSettingContext = {
  themeMode: ModeType
  onChangeThemeMode: () => void
}

const initialState: ThemeSettingContext = {
  themeMode: 'light',
  onChangeThemeMode: () => {}
}

const ThemeSettingContext = createContext(initialState)
const { Provider } = ThemeSettingContext

type ThemeSettingProviderProps = {
  children: ReactNode
}

function ThemeSettingProvider({ children }: ThemeSettingProviderProps) {
  const [themeMode, setThemeMode] = useState<ModeType>(initialState.themeMode)
  const isLight = themeMode === 'light'

  const onChangeThemeMode = () => {
    setThemeMode(isLight ? 'dark' : 'light')
  }

  const value = {
    themeMode: themeMode,
    onChangeThemeMode: onChangeThemeMode
  }

  return <Provider value={value}>{children}</Provider>
}

export { ThemeSettingProvider, ThemeSettingContext }
