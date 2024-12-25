import { Box, Stack, IconButton, Drawer, List, ListItem, ListItemButton, ModalClose, Typography, Divider } from '@mui/joy'
import { useState } from 'react'
import Button from '@mui/joy/Button'
import ButtonGroup from '@mui/joy/ButtonGroup'
import MenuIcon from '@mui/icons-material/Menu'
import { activeTheme } from '../../main/AppTheme/theme'

const MobileMenu = ({ list, mainLink }) => {
    const [open, setOpen] = useState(false)
    const toggleDrawer = (newOpen) => () => setOpen(newOpen)

    return (
        <>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} variant="soft" color="success">
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        ml: 'auto',
                        mt: 1,
                        mr: 2,
                        mb: 1,
                    }}
                >
                    <Typography
                        component="label"
                        htmlFor="close-icon"
                        sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer' }}
                    >
                        Закрыть
                    </Typography>
                    <ModalClose id="close-icon" sx={{ position: 'initial' }} />
                </Box>
                <Box
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem>
                            <ListItemButton
                                component="a"
                                href={mainLink.link}
                                sx={{ py: '10px', px: '15px' }}
                            >
                                {mainLink.name}
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        {list.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemButton
                                    component="a"
                                    href={item.link}
                                    sx={{ py: '10px', px: '15px' }}
                                >{item.name}</ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

const DesktopMenu = ({ list, mainLink }) => (
    <Stack direction="row" spacing="10px">
        <ButtonGroup
            color="success"
            // variant="soft"
            sx={{
                border: activeTheme().header.border,
                '--ButtonGroup-radius': '50px',
                '--ButtonGroup-separatorColor': 'none !important',
            }}
        >
            {list.map((item, index) => (
                <Button
                    component="a"
                    href={item.link}
                    key={index}
                    sx={{
                        py: '10px',
                        px: '20px',
                        border: 'none !important',
                        borderRadius: '50px !important'
                    }}
                >
                    {item.name}
                </Button>
            ))}
        </ButtonGroup>
        <Button component="a" href={mainLink.link} color="success" sx={{
            borderRadius: '50px',
            py: '10px',
            px: '20px',
        }}>
            {mainLink.name}
        </Button>
    </Stack>
)

export const HeaderRightNav = ({ list, mainLink }) => (
    <>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <DesktopMenu list={list} mainLink={mainLink} />
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MobileMenu list={list} mainLink={mainLink} />
        </Box>
    </>
)
