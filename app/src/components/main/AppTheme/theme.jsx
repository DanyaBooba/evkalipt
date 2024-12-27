import { extendTheme } from '@mui/joy/styles'

import { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                success: {
                    100: "#c7f7c7",
                    200: "#a0e8a0",
                },
                background: {
                    body: '#f1fff7',
                },
                header: {
                    backgroundColor: 'rgba(231, 255, 241, .5)',
                    borderBottomColor: '#d8eade',
                    border: '1px solid #a1e8a1',
                },
                footer: {
                    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 30%, #e7fdee 100%)'
                }
            },
        },
        dark: {
            palette: {
                success: {
                    700: "#204731",
                    800: "#053805",
                },
                background: {
                    body: '#0f2418',
                    surface: '#12212d',
                    popup: '#142735'
                },
                header: {
                    backgroundColor: 'rgba(20, 47, 31, .5)',
                    borderBottomColor: '#204731',
                    border: '1px solid #0a470a',
                },
                footer: {
                    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 30%, #173323 100%)'
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
