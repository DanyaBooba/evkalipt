import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/joy/IconButton'
import Link from '@mui/joy/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/joy/Typography'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Logo } from "../../block/Logo/Logo"
import { activeTheme } from '../../main/AppTheme/theme'
import { BlockContacts, BlockInfo, BlockProjects, BlockPages } from './Pages'
import Grid from '@mui/material/Grid2'

const FooterTopMainBlock = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: { xs: '100%', sm: '450px' },
        }}
    >
        <Box sx={{ width: { xs: '100%', sm: '80%' } }}>
            <Link href="/">
                <Logo style={{ height: '64px', width: '64px' }} />
            </Link>
            <Typography level="h4" sx={{ mt: '.5rem', mb: '.5rem' }}>
                эвкалипт
            </Typography>
            <Typography level="body-sm" sx={{ lineWeight: '150%', mb: '2rem' }}>
                эвкалипт – магазин приложений <nobr>с пользовательскими</nobr> запросами <nobr>на приложения</nobr>, наградами <nobr>и скидками</nobr> <nobr>за активность</nobr>, поддержкой локальных разработчиков.
            </Typography>
        </Box>
    </Box>
)

const FooterTop = () => {
    const gridSize = {
        lg: 3,
        md: 3,
        sm: 6,
        xs: 12,
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { md: 'row', sm: 'column', xs: 'column' },
                width: '100%',
                justifyContent: 'space-between',
            }}
        >
            <FooterTopMainBlock />
            <Grid container spacing={2}>
                <Grid size={gridSize}>
                    <BlockPages />
                </Grid>
                <Grid size={gridSize}>
                    <BlockProjects />
                </Grid>
                <Grid size={gridSize}>
                    <BlockInfo />
                </Grid>
                <Grid size={gridSize}>
                    <BlockContacts />
                </Grid>
            </Grid>
        </Box>
    )
}

const FooterBottom = () => (
    <Box
        sx={{
            display: {
                lg: 'flex',
                md: 'flex',
                sm: 'inline',
                xs: 'inline'
            },
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: { xs: 4, sm: 2 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    lg: 'row',
                    md: 'row',
                    sm: 'column',
                    xs: 'column'
                },
                gap: '.5rem',
                mb: { sm: '.5rem', xs: '.5rem' }
            }}
        >
            <Copyright />
            <Typography
                level="body-xs"
                sx={{
                    display: {
                        lg: 'inline',
                        md: 'inline',
                        sm: 'none',
                        xs: 'none'
                    },
                    mx: 0.5, opacity: 0.5
                }}>
                {' • '}
            </Typography>
            <Link href="/docs/privacy-policy" color="neutral" level="body-xs">
                Политика Конфиденциальности
            </Link>
            <Typography
                level="body-xs"
                sx={{
                    display: {
                        lg: 'inline',
                        md: 'inline',
                        sm: 'none',
                        xs: 'none'
                    },
                    mx: 0.5, opacity: 0.5
                }}
            >
                {' • '}
            </Typography>
            <Link href="/docs/terms-of-use" color="neutral" level="body-xs">
                Условия Использования
            </Link>
        </Box>
        <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
            <IconButton
                href="#"
                aria-label="Телеграм канал"
                sx={{ alignSelf: 'center', "--IconButton-size": "28px" }}>
                <TelegramIcon />
            </IconButton>
            <IconButton
                href="#"
                aria-label="Ютуб канал"
                sx={{ alignSelf: 'center', "--IconButton-size": "28px" }}>
                <YouTubeIcon />
            </IconButton>
        </Stack>
    </Box>
)

const Copyright = () => (
    <Typography level="body-xs" color="#000">
        {'©'}
        &nbsp;
        {new Date().getFullYear()}
        &nbsp;
        «Эвкалипт»
    </Typography>
)

export const Footer = () => {
    const theme = activeTheme()
    return (
        <Box
            sx={{
                background: theme.footer.background,
                mt: '2rem'
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 8 },
                    pt: { xs: 2, sm: 8 },
                    pb: 2,
                    textAlign: 'left',
                }}
            >
                <FooterTop />
                <FooterBottom />
            </Container>
        </Box>
    )
}
