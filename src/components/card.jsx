import { Box, Card, Typography } from '@mui/material'
import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Cards = ({ icon,
    label,
    value,
    percent,
    className }) => {
    return (
        <Box className='card' sx={{display: "flex",
 
            rowGap: "7px",flexDirection:"column"}}>

            <Box>
                <img className={`${className} saleLogos`} src={icon} />
                <Typography className='labelText'>{label}</Typography>

            </Box>
            <Box className="sales-below-section">

                <Typography className='sale-rec'>{value}</Typography>
                <Box sx={{display:"flex"}}>
                    {percent<0 ?<ArrowDropDownIcon className='align-s-center downIcon'/>:
                    <ArrowDropUpIcon className='align-s-center upIcon' />}
                    <Typography sx={{alignSelf:"center"}}>{Math.abs(percent)}%</Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default Cards