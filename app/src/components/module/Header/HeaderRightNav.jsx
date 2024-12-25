import { Stack } from '@mui/joy'
import Button from '@mui/joy/Button'
import ButtonGroup from '@mui/joy/ButtonGroup'

export const HeaderRightNav = ({ list, mainLink }) => (
    <div>
        <Stack direction="row" spacing={2}>
            <ButtonGroup
                color="success"
                sx={{
                    '--ButtonGroup-radius': '50px',
                    '--ButtonGroup-separatorColor': 'none !important',
                }}
            >
                {list.map((item, index) => (
                    <Button component="a" href={item.link} key={index} sx={{ py: '10px', px: '20px' }}>
                        {item.name}
                    </Button>
                ))}
            </ButtonGroup>
            <Button component="a" href={mainLink.link} color="success" sx={{
                borderRadius: '50px',
                py: '10px',
                px: '20px'
            }}>
                {mainLink.name}
            </Button>
        </Stack>
    </div>
)
