import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {BarChart} from '@mui/x-charts/BarChart';

const barChartsParams = {
    series: [
        {
            id: 'series-1',
            data: [3, 4, 1, 6, 5, 1, 3], // Bottom segment (green)
            label: 'Green Segment',
            stack: 'total',
            color: '#67AB75', // Green
            highlightScope: {
                highlighted: 'item',
            },
        },
        {
            id: 'series-2',
            data: [2, 3, 1, 4, 3, 6, 7], // Middle segment (orange)
            label: 'Orange Segment',
            stack: 'total',
            color: '#FD904B', // Orange
            highlightScope: {
                highlighted: 'item',
            },
        },
        {
            id: 'series-3',
            data: [1, 2, 1, 2, 4, 9, 8], // Top segment (blue)
            label: 'Blue Segment',
            stack: 'total',
            color: '#334BFF', // Blue
            highlightScope: {
                highlighted: 'item',
            },
        },
    ],
    xAxis: [{data: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], scaleType: 'band', id: 'axis1'}],
    height: 400,
};

export default function BarClickNoSnap() {
    const [itemData, setItemData] = React.useState();
    const [axisData, setAxisData] = React.useState();

    return (
        <Stack
            direction={{xs: 'column', md: 'row'}}
            sx={{width: '100%'}}
        >
            <Box sx={{flexGrow: 1}}>
                <BarChart
                    {...barChartsParams}
                    onItemClick={(event, d) => setItemData(d)}
                    onAxisClick={(event, d) => setAxisData(d)}
                    height={350}
                />
            </Box>
        </Stack>
    );
}
