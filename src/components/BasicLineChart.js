import * as React from 'react';
import {LineChart} from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const dataByTimeRange = {
    days: {
        xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        seriesData: [3, 5, 2, 8, 4, 7, 6],
    },
    months: {
        xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        seriesData: [12, 19, 9, 17, 14, 13, 21, 18, 16, 23, 25, 22],
    },
    years: {
        xAxisData: ['2018', '2019', '2020', '2021', '2022', '2023'],
        seriesData: [50, 75, 60, 90, 80, 95],
    },
};

export default function BasicLineChart() {
    const [timeRange, setTimeRange] = React.useState('days');

    const handleTimeRangeChange = (event) => {
        setTimeRange(event.target.value);
    };

    return (
        <Box sx={{width: '100%',paddingTop: 4}}>
            <Typography variant="h6" gutterBottom align="center">
                Line Chart
            </Typography>
            <Select
                value={timeRange}
                onChange={handleTimeRangeChange}
                sx={{marginBottom: 2, width: '150px'}}
                displayEmpty
                inputProps={{'aria-label': 'Select time range'}}
            >
                <MenuItem value="days">Days</MenuItem>
                <MenuItem value="months">Months</MenuItem>
                <MenuItem value="years">Years</MenuItem>
            </Select>

            <LineChart
                xAxis={[{
                    data: dataByTimeRange[timeRange]?.xAxisData || [],
                    scaleType: 'band',
                }]}
                series={[
                    {
                        data: dataByTimeRange[timeRange]?.seriesData || [],
                        color: '#FD904B',
                        fill: true,
                        fillOpacity: 0.2,
                        strokeWidth: 4,
                        showNodes: false,
                    },
                ]}
                width={500}
                height={250}
            />
        </Box>
    );
}