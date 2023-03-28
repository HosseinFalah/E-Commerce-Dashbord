import axios from 'axios';
import { useEffect, useState } from "react";
import { Avatar, Box, Button } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responseUser = await axios.get('https://reqres.in/api/users');
            setUsers(responseUser.data.data)
        }

        fetchData()
    }, []);

    const handleRemoveUser = (id) => {
        const cloneUser = [...users]
        const filteredUser = cloneUser.filter(user => user.id !== id);
        setUsers(filteredUser);
    }

    const userColumns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: "avatar",
            headerName: "Images",
            renderCell: (params) => {
                return (
                    <Avatar src={params.row.avatar} />
                );
            }
        },   
        {
          field: 'first_name',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'last_name',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
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
                    <>
                        <Link to={`/user/${params.row.id}`}>
                            <Button color='primary'>
                                <EditIcon/>
                            </Button>
                        </Link>
                        <Button color='error' onClick={() => handleRemoveUser(params.row.id)}>
                            <DeleteIcon/>
                        </Button>
                    </>
                )
            }
        },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={userColumns}
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

export default Users