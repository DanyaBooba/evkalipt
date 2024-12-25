import { Text } from "../../block/Typography/Text"
import { Logo } from "../../block/Logo/Logo"
import { Stack } from "@mui/material"
import { Link } from "@mui/joy"

export const HeaderLeftLogo = () => (
    <>
        <Link href="/" underline="none">
            <Stack direction="row" alignItems="center" spacing={1}>
                <Logo sx={{ width: '43px', height: '43px' }} />
                <Text level="title">
                    эвкалипт
                </Text>
            </Stack>
        </Link>
    </>
)
