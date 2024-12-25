import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import { theme } from './theme'

export const AppTheme = ({ children }) => (
    <CssVarsProvider theme={theme} defaultMode='system'>
        <CssBaseline />
        {children}
    </CssVarsProvider>
)
