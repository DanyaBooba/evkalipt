import styled from "styled-components"
import { Container } from "@mui/joy"
import { activeTheme } from '../../main/AppTheme/theme'
import { HeaderLeftLogo } from "./HeaderLeftLogo"
import { HeaderRightNav } from "./HeaderRightNav"

const BlockHeader = styled.header`
    position: fixed;
    background-image: none;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);

    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    z-index: 100;
    top: 0px;
    left: auto;
    right: 0px;
`

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
`

export const Header = () => {
    const pathname = window.location.pathname
    const theme = activeTheme()
    const listLinks = [
        {
            name: 'Приложения',
            link: '/'
        },
        {
            name: 'Игры',
            link: '/'
        },
        {
            name: 'Топ 2024',
            link: '/'
        },
        {
            name: 'О магазине',
            link: '/'
        },
    ]

    const mainLink = {
        name: 'Скачать магазин',
        link: '/'
    }

    return (
        <BlockHeader style={{
            backgroundColor: theme.header.backgroundColor,
            borderBottomColor: theme.header.borderBottomColor,
        }}>
            <Container sx={{ py: '10px' }}>
                <Toolbar>
                    <HeaderLeftLogo />
                    <HeaderRightNav list={listLinks} mainLink={mainLink} />
                </Toolbar>
            </Container>
        </BlockHeader>
    )
}
