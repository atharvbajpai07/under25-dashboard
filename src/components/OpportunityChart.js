import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import { BarChart } from '@mui/x-charts/BarChart';

const barChartsParams = {
  series: [
    {
      id: 'series-1',
      data: [3, 4, 1, 6, 5], // Bottom segment (green)
      label: 'Green Segment',
      stack: 'total',
      color: '#67AB75', // Green
      highlightScope: {
        highlighted: 'item',
      },
    },
    {
      id: 'series-2',
      data: [2, 3, 1, 4, 3], // Middle segment (orange)
      label: 'Orange Segment',
      stack: 'total',
      color: '#FD904B', // Orange
      highlightScope: {
        highlighted: 'item',
      },
    },
    {
      id: 'series-3',
      data: [1, 2, 1, 2, 4], // Top segment (blue)
      label: 'Blue Segment',
      stack: 'total',
      color: '#334BFF', // Blue
      highlightScope: {
        highlighted: 'item',
      },
    },
  ],
  xAxis: [{ data: ['0', '3', '6', '9', '12'], scaleType: 'band', id: 'axis1' }],
  height: 400,
};

export default function BarClickNoSnap() {
  const [itemData, setItemData] = React.useState();
  const [axisData, setAxisData] = React.useState();

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: '100%' }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <BarChart
          {...barChartsParams}
          onItemClick={(event, d) => setItemData(d)}
          onAxisClick={(event, d) => setAxisData(d)}
        />
      </Box>

      <Stack direction="column" sx={{ width: { xs: '100%', md: '40%' } }}>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Click on the chart</Typography>
          <IconButton
            aria-label="reset"
            size="small"
            onClick={() => {
              setItemData(null);
              setAxisData(null);
            }}
          >
            <UndoOutlinedIcon fontSize="small" />
          </IconButton>
        </Box> */}
      </Stack>
    </Stack>
  );
}
