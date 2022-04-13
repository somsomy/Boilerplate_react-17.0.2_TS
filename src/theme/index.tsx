import { useMemo, ReactNode, useContext } from 'react'

import { CssBaseline, ThemeOptions } from '@mui/material'
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider
} from '@mui/material/styles'

import { ThemeSettingContext } from '../common/contexts/ThemeSettingContext'

import palette from './palette'

type Props = {
  children: ReactNode
}

export default function ThemeProvider({ children }: Props) {
  const { themeMode } = useContext(ThemeSettingContext)
  const isLight = themeMode === 'light'

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark
    }),
    [isLight]
  )

  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
