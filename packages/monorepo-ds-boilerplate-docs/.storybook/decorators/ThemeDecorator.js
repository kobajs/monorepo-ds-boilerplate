import React from 'react'

import { SCThemeProvider } from 'monorepo-ds-boilerplate-components'

export default story => <SCThemeProvider>{story()}</SCThemeProvider>
