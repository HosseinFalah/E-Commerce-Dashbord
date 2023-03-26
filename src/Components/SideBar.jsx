import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { sidebar } from "../Constants/sidebar"

const SideBar = () => {
    console.log(sidebar);
    return (
        <Box>
            {sidebar.map(item => (
                <List key={item.id}
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="ul"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="span" id="nested-list-subheader">
                            {item.title}
                        </ListSubheader>
                    }>
                        {item.listItems.map(item => (
                            <ListItemButton key={item.id} sx={{mx: 2}}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        ))}
                </List>
            ))}
        </Box>
    )
}

export default SideBar