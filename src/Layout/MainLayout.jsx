import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./Theme";
import { SideBar, TopBar } from "../Components";
import { Box } from "@mui/material";

const MainLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <TopBar/>
            <Box sx={{ display: 'flex', columnGap: 2 }}>
                <SideBar/>
                <Outlet/>
            </Box>
        </ThemeProvider>
    )
}

export default MainLayout