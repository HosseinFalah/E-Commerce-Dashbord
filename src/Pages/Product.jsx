import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material"
import { Chart } from "../Components"
import { productsData } from "../Constants/charts"

const Product = () => {
    const { productID } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${productID}`)
            setProduct(data);
        }

        getProduct();
    }, []);

    return (
        <Box width={1}>
            <Stack 
                direction="row" 
                alignItems={'center'}
                justifyContent={'space-between'} 
                spacing={2}>
                    <Typography component={'h2'} variant="h4">Product</Typography>
                    <Button variant="contained" color="info">Create</Button>
            </Stack>
            <Grid container>
                <Grid item xs={6} p={0.5}>
                    <Chart title={'Sale In Month'} data={productsData} dataKey={'sales'}/>
                </Grid>
                <Grid item xs={6} p={0.5}>
                    <Box my={3} sx={{boxShadow: "0px 0px 15px 1px #ccc", px: 2.5, py: 3.5, borderRadius: 3}}>
                        <Stack direction='row' alignItems='center' columnGap={2}>
                            <Avatar src={product.image}/>
                            <Typography>{product.title}</Typography>
                        </Stack>
                        <Stack my={1} direction="row" alignItems={'center'} justifyContent={'space-between'}>
                            <Typography sx={{ fontWeight: 600 }}>ID:</Typography>
                            <Typography>{product.id}</Typography>
                        </Stack>
                        <Stack my={1} direction="row" alignItems={'center'} justifyContent={'space-between'}>
                            <Typography sx={{ fontWeight: 600 }}>Title:</Typography>
                            <Typography>{product.title}</Typography>
                        </Stack>
                        <Stack my={1} direction="row" alignItems={'center'} justifyContent={'space-between'}>
                            <Typography sx={{ fontWeight: 600 }}>Price:</Typography>
                            <Typography>{product.price}</Typography>
                        </Stack>
                        <Stack my={1} direction="row" alignItems={'center'} justifyContent={'space-between'}>
                            <Typography sx={{ fontWeight: 600 }}>Category:</Typography>
                            <Typography>{product.category}</Typography>
                        </Stack>
                        <Stack my={1}>
                            <Typography sx={{ fontWeight: 600 }}>Description:</Typography>
                            <Typography my={1}>{product.description}</Typography>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Product