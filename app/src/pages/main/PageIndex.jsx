import { Box, Container } from "@mui/joy";

import { Header } from '../../components/module/Header/Header'
import { Footer } from '../../components/module/Footer/Footer'
import { PageTitle } from '../../components/main/PageTitle/PageTitle'
import { Text } from "../../components/block/Typography/Text";
import { HeroLeft01 } from '../../components/module/Index/HeroLeft01'

export const PageIndex = () => (
    <>
        {PageTitle()}
        <Header />
        {/* <Container className="containerTop"></Container> */}
        <Box
            className="containerTop"
            sx={{
                height: '100vh',
                overflowY: 'scroll',
                scrollSnapType: 'y mandatory',
                // scrollPadding: '63px',
                '& > div': {
                    scrollSnapAlign: 'start',
                },
            }}
        >
            <HeroLeft01 />
            <HeroLeft01 />
            <HeroLeft01 />
            <HeroLeft01 />
            <Footer />
        </Box>
    </>
)
