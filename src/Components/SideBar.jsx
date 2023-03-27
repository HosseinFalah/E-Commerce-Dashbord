import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { sidebar } from "../Constants/sidebar"
import { Link } from "react-router-dom";

const SideBar = () => {
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
                        {item.listItems.map(items => (
                            <Link key={items.id} to={items.link} style={{textDecoration: 'none', color: 'inherit'}}>
                                <ListItemButton sx={{mx: 2}}>
                                    <ListItemIcon>
                                        {items.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={items.name} />
                                </ListItemButton>
                            </Link>
                        ))}
                </List>
            ))}
        </Box>
    )
}

export default SideBar