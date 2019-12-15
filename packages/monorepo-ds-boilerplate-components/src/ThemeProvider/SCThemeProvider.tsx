import React from 'react'
import { ThemeProvider } from 'styled-components'

import defaultTheme, { ITheme } from '../themes/defaultTheme'

type SCThemeProviderProps = {
  theme: ITheme
}

const SCThemeProvider: React.FC<SCThemeProviderProps> = props => {
  const { children, theme } = props
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

SCThemeProvider.defaultProps = {
  theme: defaultTheme
}

export default SCThemeProvider
