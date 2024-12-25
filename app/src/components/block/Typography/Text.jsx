import Typography from '@mui/joy/Typography'

export const Text = ({ level = "", children, ...props }) => {
    if (level == 'h1') {
        return <Typography level="h1" sx={{ mb: '1.5rem' }} {...props}>
            {children}
        </Typography>
    }

    if (level == 'h2') {
        return <Typography level="h2" sx={{ mb: '1rem' }} {...props}>
            {children}
        </Typography>
    }

    if (level == 'h3' || level == 'h4') {
        return <Typography level={level} sx={{ mb: '0.75rem' }} {...props}>
            {children}
        </Typography>
    }

    if (level == 'title') {
        return <Typography level="h4" {...props}>
            {children}
        </Typography>
    }

    if (level == "") {
        return <Typography sx={{ lineHeight: '180%', mb: '1rem' }}>
            {children}
        </Typography>
    }
}
