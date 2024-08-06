import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Typography } from '@mui/material';
import profile from "../assets/Profile.jpeg"

function createData(Customer, Order_no, Amount, Status,) {
    return { 
        Customer, 
        Order_no, 
        Amount, 
        Status:<span className={Status==="delivered" ?  "delivered": "cancelledCell"} size='small'>{Status}</span> };
}
 
const rows = [
    createData('Wade warren', 159, 6.0, "delivered"),
    createData('Jane Cooper', 237, 9.0, "delivered"),
    createData('Guy Hawkins', 262, 16.0,"cancelled"),
    createData('Kristin watson', 305, 3.7,"cancelled"),
    createData('Cody fisher', 356, 16.0,"delivered"),
    createData('Shelly martin', 256, 11.0,"delivered"),
];

export default function BasicTable() {
    return (
        <TableContainer sx={{ padding: "20px" }} >
            <Typography className="recenOrders" >Recent Orders</Typography>
            <Table sx={{ width: "100%" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Customer</TableCell>
                        <TableCell >Order No.</TableCell>
                        <TableCell >Amount</TableCell>
                        <TableCell >Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.Customer}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >
                                <img className='userPic' alt="Remy Sharp" src={profile} /> 
                                <span style={{marginLeft:"5px"}}>{row.Customer}</span>
                            </TableCell>

                            <TableCell >{row.Order_no}</TableCell>
                            <TableCell >{row.Amount}</TableCell>
                            <TableCell >{row.Status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
