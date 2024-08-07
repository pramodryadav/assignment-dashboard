
import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import React from 'react';
import { styled } from '@mui/material/styles';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import GradeIcon from '@mui/icons-material/Grade';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Cards from '../components/card';
import order from "../assets/booking2.png";
import bag from "../assets/shopping-bag.png";
import cancel from "../assets/cancel.png";
import money from "../assets/money-bag.png";
import target from "../assets/target.png";
import burger from "../assets/burger 1.png"
import cloche from "../assets/cloche.png";
import profile from "../assets/Profile.jpeg"
import BasicTable from '../components/Table';

import RoundedBarChart from '../components/ApexBarChart';






const sales = [
  {
    id: 1,
    icon: order,
    label: "Total Orders",
    value: 75,
    percent: 3,
    className: "total-orders-icon"
  },
  {
    id: 2,
    icon: bag,
    label: "Total Delivered",
    value: 70,
    percent: -3,
    className: "delivered-icon"
  },
  {
    id: 3,
    icon: cancel,
    label: "Total Cancelled",
    value: 5,
    percent: 3,
    className: "cancelled"
  },
  {
    id: 4,
    icon: money,
    label: "Total Revenue",
    value: "$12k",
    percent: -3,
    className: "cancelled"
  }
];



const Dashboard = () => {

  return (
    <Grid container sx={{ backgroundColor: "background.default", padding: "20px", mt: 1 }} rowSpacing={4} columnSpacing={4}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
      </Grid>
      <Grid item container xs={12} lg={8} spacing={3} >

        {
          sales.map((order, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Cards
                icon={order.icon}
                label={order.label}
                value={order.value}
                percent={order.percent}
                className={order.className}
              />

            </Grid>
          ))
        }


      </Grid>
      <Grid item xs={12} lg={4}>
        <Box className="card" >
          <Box sx={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}>
            <Box >
              <Typography className='labelText'>Net Profit</Typography>
              <Typography className='profit'>$6759.25k</Typography>

              <Box sx={{ display: "flex",padding:"3px"}}>
                <ArrowDropUpIcon className='align-s-center upIcon' />
                <Typography sx={{ alignSelf: "center" }}>{3}%</Typography>
              </Box>

            </Box>

            <Box sx={{  display: "flex", justifyContent: "center" }}>

              <div style={{ maxWidth: '100px', maxHeight: '100px', position: 'relative' }}>
                <CircularProgressbarWithChildren value={70}>
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <strong>70%</strong>
                  <div style={{ fontSize: 12, marginTop: -5 }}>

                    <strong>Goal </strong>

                  </div>
                  <div style={{ fontSize: 12, marginTop: -5 }}>

                    <strong>Completed </strong>

                  </div>
                </CircularProgressbarWithChildren>


              </div>
            </Box>

          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box></Box>
            <Box sx={{ display: "flex", justifyContent: "end",}}>
              <Typography variant='caption' >*The value here has been rounded off</Typography>
            </Box>

          </Box>


        </Box>
      </Grid>
      <Grid item xs={12} lg={8} >

<Box className="card">
 
  <RoundedBarChart/>

</Box>


      </Grid>
      <Grid item xs={12} lg={4}>
        <Box className="card" sx={{ display: "flex", flexDirection: "column", rowGap: "22px" }}>
          <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", columnGap: "15px" }}>
              <img src={target} className='target foodLogos' />
              <Typography className='label1'>Goals</Typography>
            </Box>
            <KeyboardArrowRightIcon className='dropDownIcon' />
          </Box>


          <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", columnGap: "15px" }}>
              <img src={burger} className='burger foodLogos' />
              <Typography className='label1'>Popular Dishes</Typography>
            </Box>
            <KeyboardArrowRightIcon className='dropDownIcon' />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", columnGap: "15px" }}>
              <img src={cloche} className='cloche foodLogos' />
              <Typography className='label1'>Popular Dishes</Typography>
            </Box>
            <KeyboardArrowRightIcon className='dropDownIcon' />
          </Box>

        </Box>

      </Grid>

      <Grid item xs={12} lg={8} >

        <BasicTable />


      </Grid>
      <Grid item xs={12} lg={4}>

        <Box className="card">
          <Typography className="recenOrders" >Customer's Feedback</Typography>
          <Box sx={{ mt: 1, maxHeight: 437, overflowY: "scroll" }}>
            <Box sx={{ display: "flex", flexDirection: "column", columnGap: "7px" }}>

              <Box sx={{ display: "flex", columnGap: "8px" }}>
                <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src={profile} />
                <Typography className='userName'>Jenny Wilson</Typography>
              </Box>

              <Box>
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
              </Box>
              <Typography className='feedback'>
                The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens tgluten-freel which was also very good. They were very conscientious about gluten allergies.
              </Typography>
            </Box>
            <Box sx={{ margin: "8px 0px" }}>
              <Divider />
            </Box>


            <Box sx={{ display: "flex", flexDirection: "column", columnGap: "7px" }}>

              <Box sx={{ display: "flex", columnGap: "8px" }}>
                <Avatar sx={{ width: 30, height: 30 }} alt="Dianne Russell" src={profile} />
                <Typography className='userName'>Dianne Russell</Typography>
              </Box>

              <Box>
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
              </Box>
              <Typography className='feedback'>
                We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service
              </Typography>
            </Box>
            <Box sx={{ margin: "8px 0px" }}>
              <Divider />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", columnGap: "7px" }}>

              <Box sx={{ display: "flex", columnGap: "8px" }}>
                <Avatar sx={{ width: 30, height: 30 }} alt="Dianne Russell" src={profile} />
                <Typography className='userName'>Dianne Russell</Typography>
              </Box>

              <Box>
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
              </Box>
              <Typography className='feedback'>
                We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service
              </Typography>
            </Box>
            <Box sx={{ margin: "8px 0px" }}>
              <Divider />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", columnGap: "7px" }}>

              <Box sx={{ display: "flex", columnGap: "8px" }}>
                <Avatar sx={{ width: 30, height: 30 }} alt="Dianne Russell" src={profile} />
                <Typography className='userName'>Dianne Russell</Typography>
              </Box>

              <Box>
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
              </Box>
              <Typography className='feedback'>
                We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service
              </Typography>
            </Box>
            <Box sx={{ margin: "8px 0px" }}>
              <Divider />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", columnGap: "7px" }}>

              <Box sx={{ display: "flex", columnGap: "8px" }}>
                <Avatar sx={{ width: 30, height: 30 }} alt="Dianne Russell" src={profile} />
                <Typography className='userName'>Dianne Russell</Typography>
              </Box>

              <Box>
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
              </Box>
              <Typography className='feedback'>
                We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service
              </Typography>
            </Box>
            <Box sx={{ margin: "8px 0px" }}>
              <Divider />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", columnGap: "7px" }}>

              <Box sx={{ display: "flex", columnGap: "8px" }}>
                <Avatar sx={{ width: 30, height: 30 }} alt="Dianne Russell" src={profile} />
                <Typography className='userName'>Dianne Russell</Typography>
              </Box>

              <Box>
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
              </Box>
              <Typography className='feedback'>
                We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service
              </Typography>
            </Box>
            <Box sx={{ margin: "8px 0px" }}>
              <Divider />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", columnGap: "7px" }}>

              <Box sx={{ display: "flex", columnGap: "8px" }}>
                <Avatar sx={{ width: 30, height: 30 }} alt="Dianne Russell" src={profile} />
                <Typography className='userName'>Dianne Russell</Typography>
              </Box>

              <Box>
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
              </Box>
              <Typography className='feedback'>
                We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service
              </Typography>
            </Box>
            <Box sx={{ margin: "8px 0px" }}>
              <Divider />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", columnGap: "7px" }}>

              <Box sx={{ display: "flex", columnGap: "8px" }}>
                <Avatar sx={{ width: 30, height: 30 }} alt="Dianne Russell" src={profile} />
                <Typography className='userName'>Dianne Russell</Typography>
              </Box>

              <Box>
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
              </Box>
              <Typography className='feedback'>
                We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service
              </Typography>
            </Box>

            <Box sx={{ margin: "8px 0px" }}>
              <Divider />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", columnGap: "7px" }}>

              <Box sx={{ display: "flex", columnGap: "8px" }}>
                <Avatar sx={{ width: 30, height: 30 }} alt="Dianne Russell" src={profile} />
                <Typography className='userName'>Dianne Russell</Typography>
              </Box>

              <Box>
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
                <GradeIcon className='ratingIcon' />
              </Box>
              <Typography className='feedback'>
                We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service
              </Typography>
            </Box>
          </Box>

        </Box>

      </Grid>

    </Grid>
  )
}

export default Dashboard