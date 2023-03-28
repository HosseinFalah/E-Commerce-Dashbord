import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { transActions, transActionsColumns } from '../Constants/transactions';

const TransActions = () => {
    return (
        <Box sx={{ height: 400, my: 2, boxShadow: "0px 0px 15px 1px #ccc", borderRadius: 3 }}>
            <DataGrid
                rows={transActions}
                columns={transActionsColumns}
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

export default TransActions