import { Avatar, Badge, Box, Typography } from "@mui/material"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const TopBar = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
            <Typography component='p' variant="h4" color="primary">Admin Panel</Typography>
            <Box sx={{ display: "flex", alignItems: 'center', columnGap: 2}}>
                <Badge badgeContent={2} color="error">
                    <NotificationsNoneIcon/>
                </Badge>
                <Badge badgeContent={3} color="error">
                    <LanguageIcon/>
                </Badge>
                <SettingsIcon/>
                <Avatar
                    alt="HosseinFalah"
                    src="/Images/Avatar.jpg"
                    sx={{ width: 56, height: 56, objectFit: 'cover' }}
                />
            </Box>
        </Box>
    )
}

export default TopBar