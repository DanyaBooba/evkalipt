import Box from '@mui/material/Box'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'

const ShowPages = ({ title, list }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            mb: '1rem'
        }}
    >
        <Typography level="body-xs" color="#000" sx={{ fontWeight: '600' }}>
            {title}
        </Typography>
        {list.map((item, index) => (
            <Link href={item.link} color="neutral" level="body-xs" key={index}>
                {item.name}
            </Link>
        ))}
    </Box>
)

export const BlockPages = () => {
    const list = [
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
    ]

    return <ShowPages title="Страницы" list={list} />
}

export const BlockProjects = () => {
    const list = [
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
    ]

    return <ShowPages title="Страницы" list={list} />
}

export const BlockInfo = () => {
    const list = [
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
    ]

    return <ShowPages title="Страницы" list={list} />
}

export const BlockContacts = () => {
    const list = [
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
        {
            name: 'Чуточку более длинное название',
            link: '/123',
        },
    ]

    return <ShowPages title="Страницы" list={list} />
}
