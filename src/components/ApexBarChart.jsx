import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const options = {
    chart: {
        type: 'bar',
        id: 'bar-chart',
        toolbar: {
            show: false // Disable the toolbar to hide the download button
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 15, // Add border radius to the bars
            horizontal: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
    },
    yaxis: {
        title: {
            text: 'Value'
        },
        tickAmount: 3

    },
    tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        hideEmptySeries: true,
        fillSeriesColor: false,
        theme: false,
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        onDatasetHover: {
            highlightDataSeries: false,
        },
        x: {
            show: true,
            format: 'dd MMM',
            formatter: undefined,
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName,
            },
        },
        z: {
            formatter: undefined,
            title: 'Size: '
        },
        marker: {
            show: true,
        },
        items: {
           display: "flex",
        },
        fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
        },
    },

    fill: {
        colors: ['#7294ff'], // Change the color of the bars
        opacity: 1
    },
};

const series = [
    {
        name: 'series-1',
        data: [600, 320, 430, 240, 350, 560, 250, 350, 395, 220, 430, 560, 250, 230, 430, 245, 350, 560, 250, 350]
    }
];

const RoundedBarChart = () => (
    <Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography className="recenOrders">Activity</Typography>
        <Button className='activity' endIcon={<ArrowDropDownIcon/>}>weekly</Button>
        </Box>
        
        <Chart options={options} series={series} type="bar" width="100%" height="205px" />
    </Box>
);

export default RoundedBarChart;
