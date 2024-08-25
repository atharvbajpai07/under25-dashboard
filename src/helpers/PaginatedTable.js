import React, { useState } from 'react';
import {
  Box, MenuItem, FormControl, Select, Pagination, Typography, Grid
} from '@mui/material';

const PaginatedTable = ({ totalItems }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1); // Reset to the first page when items per page changes
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} flexWrap="nowrap"  paddingRight='20px'>
      <Grid container alignItems="center" spacing={1} sx={{ flexWrap: 'nowrap', width: "20vw", height:'10vh',paddingLeft:'20px' }}>
        <Grid item>
          <Typography>Show</Typography>
        </Grid>
        <Grid item>
          <FormControl variant="outlined" size="small">
            <Select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              displayEmpty
              sx={{ minWidth: 30, height: 30, fontSize: '0.875rem', backgroundColor: '#f0f0f0' }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Typography>per page</Typography>
        </Grid>
      </Grid>

      <Pagination
        count={Math.ceil(totalItems / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        siblingCount={1}
        boundaryCount={1}
        sx={{
          '& .MuiPaginationItem-root': {
            minWidth: '32px',
            height: '32px',
            margin: '0 4px',
            backgroundColor: '#fff',
            borderColor: '#ddd',
            color: '#333',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          },
          '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#ddd',
            color: '#333',
            fontWeight: 'bold',
          },
        }}
      />
    </Box>
  );
};

export default PaginatedTable;
