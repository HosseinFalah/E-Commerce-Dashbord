import { Box, Typography } from "@mui/material";

const Feature = ({title, price, profit, icon}) => {
    return (
        <Box sx={{boxShadow: "0px 0px 15px 1px #ccc", px: 2.5, py: 3.5, borderRadius: 3}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography component='span' variant="body1" >{title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
                    <Typography component='span' variant="h5">${price}</Typography>
                    <Typography component='span'>
                        {profit}
                    </Typography>
                    {icon}
                </Box>
                <Typography component='span' variant="body2" color='#919191'>Compared to Last Month</Typography>
            </Box>
        </Box>
    )
}

export default Feature