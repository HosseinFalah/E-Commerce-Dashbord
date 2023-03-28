import { Avatar, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export const transActionsColumns = [
    {
        field: "img",
        headerName: "Images",
        renderCell: (params) => {
          return (
            <>
              <Avatar src={params.value} />
            </>
          );
        }
    },        
    { field: 'product', headerName: 'Product', width: 300 },
    {
      field: 'createat',
      headerName: 'Create at',
      width: 200,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <Button variant="contained" color={params.row.color}>{params.value}</Button>
      )
    },
];

export const transActions = [
    {id: uuidv4(), img: '/Images/shoe_1.jpg', product: 'Boston Soft Footbed Sandal', createat: '08 Apr 2022', price: 55.47, status: 'In Stock', color: 'success'},
    {id: uuidv4(), img: '/Images/shoe_2.jpg', product: 'Zoom Freak 2', createat: '07 Aug 2022', price: 89.09, status: 'Low Stock', color: 'primary'},
    {id: uuidv4(), img: '/Images/shoe_3.jpg', product: 'Foundations Matte Flip Flop', createat: '11 Feb 2022', price: 35.71, status: 'Out Of Stock', color: 'error'},
    {id: uuidv4(), img: '/Images/shoe_4.jpg', product: 'Gazelle Vintage low-top sneakers', createat: '06 May 2022', price: 44.39, status: 'Out Of Stock', color: 'error'},
    {id: uuidv4(), img: '/Images/shoe_5.jpg', product: 'Nike Air Force 1 NDESTRUKT', createat: '12 Jan 2022', price: 16.19, status: 'Low Stock', color: 'primary'},
    {id: uuidv4(), img: '/Images/shoe_6.jpg', product: 'Arizona Soft Footbed Sandal', createat: '09 Aug 2022', price: 93.10, status: 'In Stock', color: 'success'},
    {id: uuidv4(), img: '/Images/shoe_1.jpg', product: 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear', createat: '10 Sep 2022', price: 34.30, status: 'In Stock', color: 'success'}
]