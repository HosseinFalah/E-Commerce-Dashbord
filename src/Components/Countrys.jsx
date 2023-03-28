import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { countrys } from "../Constants/countrys"

const Countrys = () => {
    return (
        <TableContainer sx={{boxShadow: "0px 0px 15px 1px #ccc", borderRadius: 3}}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color: '#6b7280'}}>Country:</TableCell>
                        <TableCell sx={{color: '#6b7280'}}>Sales:</TableCell>
                        <TableCell sx={{color: '#6b7280'}}>Value:</TableCell>
                        <TableCell sx={{color: '#6b7280'}}>Bounce:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {countrys.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center', columnGap: 2}}>
                                <img src={row.img} loading="lazy" alt={row.Country}/>
                                <Typography fontWeight={700}>
                                    {row.Country}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight={700}>
                                    {row.Sales}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight={700}>
                                    ${row.Value.toLocaleString()}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight={700}>
                                    {row.Bounce.toLocaleString()}%
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Countrys;