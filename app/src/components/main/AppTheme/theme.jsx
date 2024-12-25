import { extendTheme } from '@mui/joy/styles'

import { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    body: '#f1fff7',
                },
                header: {
                    backgroundColor: 'rgba(241, 255, 247, .5)'
                }
            },
        },
        dark: {
            palette: {
                background: {
                    body: '#0f2418',
                    surface: '#12212d',
                    popup: '#142735'
                },
                header: {
                    backgroundColor: 'rgba(15, 36, 24, .5)'
                }
            },
        },
    },
})

export function activeTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')

    useEffect(() => {
        setMode(prefersDarkMode ? 'dark' : 'light')
    }, [prefersDarkMode])

    return theme.colorSchemes[mode].palette
}
