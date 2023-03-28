import { Grid, Box, Unstable_Grid2 as Grid2 } from "@mui/material"
import { Feature, Chart, Countrys, TransActions } from "../Components"
import { features,  } from "../Constants/features"
import { xAxisData } from "../Constants/charts"

const Home = () => {
    return (
        <Box sx={{ width: 1, px: 2 }}>
            <Grid container>
                {features.map(item => (
                    <Grid key={item.id} item xs={12} md={4} p={0.5}>
                        <Feature {...item}/>
                    </Grid>
                ))}
            </Grid>
            <Chart grid title={'Month Sale'} data={xAxisData} dataKey={'Sale'}/>
            <Countrys/>
            <TransActions/>
        </Box>
    )
}

export default Home