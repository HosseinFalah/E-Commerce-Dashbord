import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchDataStore = async () => {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            setProducts(data);
        }

        fetchDataStore();
    }, []);

    const handleRemoveProduct = (id) => {
        const cloneProducts = [...products];
        const filteredProducts = cloneProducts.filter(product => product.id !== id);
        setProducts(filteredProducts);
    }

    const ProductsColumns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: "image",
            headerName: "Images",
            renderCell: (params) => {
                return (
                    <Avatar src={params.row.image} />
                );
            }
        },
        {
            field: 'title',
            headerName: 'Product Name',
            width: 250,
            editable: true,
            renderCell: (params) => {
                return (
                    <Link to={`/product/${params.row.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography component='p' variant="subtitle2">{params.row.title}</Typography>
                    </Link>
                )
            }
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 120,
          editable: true,
        },
        {
          field: 'category',
          headerName: 'Category',
          width: 200,
          editable: true,
        },
        {
          field: 'action',
          headerName: 'Action',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          renderCell: (params) => {
                return (
                    <Box sx={{ display: 'flex', columnGap: 2 }}>
                        <Link to={`/product/${params.row.id}`}>
                            <Button color='primary' variant="contained">
                                <EditIcon/>
                            </Button>
                        </Link>
                        <Button color='error' variant="contained" onClick={() => handleRemoveProduct(params.row.id)}>
                            <DeleteIcon/>
                        </Button>
                    </Box>
                )
            }
        },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={ProductsColumns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    )
}

export default Products