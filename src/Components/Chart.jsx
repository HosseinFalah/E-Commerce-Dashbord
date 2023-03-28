import { Box, Typography } from "@mui/material";
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";
import './TransActions.css';

const Chart = ({title, data, dataKey, grid}) => {
    return (
        <Box my={3} sx={{boxShadow: "0px 0px 15px 1px #ccc", px: 2.5, py: 3.5, borderRadius: 3}}>
            <Typography component='h3' mb={2}>{title}</Typography>
            <ResponsiveContainer className='chartResponsve' aspect={4}>
                <LineChart data={data}>
                    <XAxis dataKey={'name'} stroke="#5550bd"/>
                    <Line type='monotone' dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray='10'/>}
                </LineChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default Chart