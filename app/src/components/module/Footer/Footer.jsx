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
import { Text } from '../../block/Typography/Text'
import { LineWeight } from '@mui/icons-material'

const footerLinkSize = "body-xs"

function BlockPages() {
    return (
        <Box
            sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                gap: 1,
            }}
        >
            <Typography level={footerLinkSize} color="#000" sx={{ fontWeight: '600' }}>
                Страницы
            </Typography>
            <Link href="/courses" color="neutral" level={footerLinkSize}>
                Учебные программы
            </Link>
            <Link href="/news" color="neutral" level={footerLinkSize}>
                Новости
            </Link>
            <Link href="/smi" color="neutral" level={footerLinkSize}>
                Мы в СМИ
            </Link>
            <Link href="/kids-projects" color="neutral" level={footerLinkSize}>
                Проекты учеников
            </Link>
            <Link href="/about" color="neutral" level={footerLinkSize}>
                О нас
            </Link>
            <Link href="/contacts" color="neutral" level={footerLinkSize}>
                Контакты
            </Link>
        </Box>
    )
}

function BlockProjects() {
    return (
        <Box
            sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                gap: 1,
            }}
        >
            <Typography level={footerLinkSize} color="#000" sx={{ fontWeight: '600' }}>
                Проекты
            </Typography>
            <Link href="/" color="neutral" target="_blank" level={footerLinkSize}>
                Стартап студия
            </Link>
            <Link href="http://robomarsh.izobretarium.ru/" target="_blank" color="neutral" level={footerLinkSize}>
                ROBOМАРШ
            </Link>
            <Link href="https://ghunter.ru" target="_blank" color="neutral" level={footerLinkSize}>
                GeekHunter
            </Link>
        </Box>
    )
}

function BlockInfo() {
    return (
        <Box
            sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                gap: 1,
            }}
        >
            <Typography level={footerLinkSize} color="#000" sx={{ fontWeight: '600' }}>
                Информация и реквизиты
            </Typography>
            <Link href="https://edu.gov.ru/" color="neutral" level={footerLinkSize}>
                Министерство просвещения<br />Российской Федерации
            </Link>
            <Link href="https://mo.mosreg.ru/" color="neutral" level={footerLinkSize}>
                Министерство образования<br />Московской области
            </Link>
            <Link href="https://bus.gov.ru/" color="neutral" level={footerLinkSize}>
                Независимая оценка<br />bus.gov.ru
            </Link>
        </Box>
    )
}

function BlockContacts() {
    return (
        <Box
            sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                gap: 1,
            }}
        >
            <Typography level={footerLinkSize} color="#000" sx={{ fontWeight: '600' }}>
                Контакты
            </Typography>
            <Link href="mailto:reut_ddt@mosreg.ru" color="neutral" level={footerLinkSize}>
                reut_ddt@mosreg.ru
            </Link>
            <Link href="tel:84955285562" color="neutral" level={footerLinkSize}>
                8 (495) 528-55-62
            </Link>
            <Link href="tel:84955280631" color="neutral" level={footerLinkSize}>
                8 (495) 528-06-31
            </Link>
            <Link href="tel:84986617001" color="neutral" level={footerLinkSize}>
                8 (498) 661-70-01
            </Link>
        </Box>
    )
}

function Copyright() {
    return (
        <Typography level={footerLinkSize} color="#000">
            {'©'}
            &nbsp;
            {new Date().getFullYear()}
            &nbsp;
            «Эвкалипт»
        </Typography>
    );
}

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
                    textAlign: { sm: 'center', md: 'left' },

                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            width: { xs: '100%', sm: '40%' },
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
                                эвкалипт – магазин приложений с пользовательскими запросы <nobr>на приложения</nobr>, награды <nobr>и скидки</nobr> <nobr>за активность</nobr>, поддержка локальных разработчиков.
                            </Typography>
                        </Box>
                    </Box>
                    <BlockPages />
                    <BlockProjects />
                    <BlockInfo />
                    <BlockContacts />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: { xs: 4, sm: 2 },
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <div>
                        <Stack direction="row" spacing={1}>
                            <Copyright />
                            <Typography level={footerLinkSize} sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
                                {' • '}
                            </Typography>
                            <Link href="/docs/privacy-policy" color="neutral" level={footerLinkSize}>
                                Политика Конфиденциальности
                            </Link>
                            <Typography level={footerLinkSize} sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
                                {' • '}
                            </Typography>
                            <Link href="/docs/terms-of-use" color="neutral" level={footerLinkSize}>
                                Условия Использования
                            </Link>
                        </Stack>
                    </div>
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
            </Container>
        </Box>
    )
}
