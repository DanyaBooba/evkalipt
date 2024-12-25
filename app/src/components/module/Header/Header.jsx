import styled from "styled-components"
import { Container } from "@mui/joy"
import { activeTheme } from '../../main/AppTheme/theme'

const BlockHeader = styled.header`
    position: fixed;
    background-image: none;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;

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

export const Header = () => {
    const theme = activeTheme()

    return (
        <BlockHeader style={{ backgroundColor: theme.header.backgroundColor }}>
            <Container sx={{ py: '20px' }}>
                header set
            </Container>
        </BlockHeader>
    )
}
