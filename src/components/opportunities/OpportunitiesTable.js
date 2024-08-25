import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import { dummyData } from '../../data/dummyData';


const columns = [
  { id: 'name', label: 'Name' },
  { id: 'missionId', label: 'Mission ID' },
  { id: 'brand', label: 'Brand' },
  { id: 'start', label: 'Start' },
  { id: 'end', label: 'End' },
  { id: 'type', label: 'Type' },
  { id: 'openings', label: 'Openings' },
];

// const rows = [
//   { name: 'Create a Reel for Gujrat Tourism on Instagram', missionId: '982918279201920', brand: 'Gujrat Tourism', start: '12/04/2023, 12:00 PM', end: '12/04/2023, 12:00 PM', type: 'Giveaway', openings: 24 },
//   { name: 'Create a Reel for Gujrat Tourism on Instagram', missionId: '982918279201921', brand: 'Gujrat Tourism', start: '12/04/2023, 12:00 PM', end: '12/04/2023, 12:00 PM', type: 'Internship', openings: 24 },
//   { name: 'Create a Reel for Gujrat Tourism on Instagram', missionId: '982918279201922', brand: 'Gujrat Tourism', start: '12/04/2023, 12:00 PM', end: '12/04/2023, 12:00 PM', type: 'Money', openings: 24 },
//   { name: "Create a Reel for Gujrat Tourism on Facebook", missionId: "982918279201944", brand: "Facebook", start: "01/02/2024, 12:00 PM", end: "01/02/2024, 12:00 PM", type: "Internship", openings: 21 },
//   { name: "Create a Reel for Gujrat Tourism on Snapchat", missionID: "982918279201945", brand: "Instagram", start: "12/10/2023, 12:00 PM", end: "12/10/2023, 12:00 PM", type: "Money", openings: 21 },
//   { name: "Create a Reel for Gujrat Tourism on Snapchat", missionID: "982918279201946", brand: "Snapchat", start: "12/17/2023, 12:00 PM", end: "12/17/2023, 12:00 PM", type: "Giveaway", openings: 21 },
//   { name: "Create a Reel for Gujrat Tourism on Twitter", missionID: "982918279201947", brand: "YouTube", start: "12/26/2023, 12:00 PM", end: "12/26/2023, 12:00 PM", type: "Money", openings: 21 },
//   { name: "Create a Reel for Gujrat Tourism on Instagram", missionID: "982918279201948", brand: "YouTube", start: "12/16/2023, 12:00 PM", end: "12/16/2023, 12:00 PM", type: "Giveaway", openings: 30 }

//   // Add more rows as needed
// ];

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState('');
  const [filterType, setFilterType] = React.useState('all');
  const [filterStatus, setFilterStatus] = React.useState('all');
  const [filterDuration, setFilterDuration] = React.useState('all');
  const [sortAnchorEl, setSortAnchorEl] = React.useState(null);
  const [sortedRows, setSortedRows] = React.useState(dummyData);
  const [sortColumn, setSortColumn] = React.useState('name');
  const [sortOrder, setSortOrder] = React.useState('asc');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const handleSort = (column) => {
    const isAsc = sortColumn === column && sortOrder === 'asc';
    const newOrder = isAsc ? 'desc' : 'asc';
    const sorted = [...dummyData].sort((a, b) => {
      if (a[column] < b[column]) return newOrder === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return newOrder === 'asc' ? 1 : -1;
      return 0;
    });
    setSortedRows(sorted);
    setSortColumn(column);
    setSortOrder(newOrder);
    handleSortClose();
  };

  const filteredRows = sortedRows.filter(row =>
    (row.name.toLowerCase().includes(search.toLowerCase()) ||
    row.missionId.toLowerCase().includes(search.toLowerCase()) ||
    row.brand.toLowerCase().includes(search.toLowerCase()) ||
    row.type.toLowerCase().includes(search.toLowerCase())) &&
    (filterType === 'all' || row.type.toLowerCase() === filterType) &&
    (filterStatus === 'all' || row.status.toLowerCase() === filterStatus) &&
    (filterDuration === 'all' || row.duration.toLowerCase() === filterDuration)
  );
  // const filteredRows = sortedRows?.filter(row =>
  //   ((row.name?.toLowerCase().includes(search.toLowerCase()) || '') &&
  //   (row.missionId?.toLowerCase().includes(search.toLowerCase()) || '') &&
  //   (row.brand?.toLowerCase().includes(search.toLowerCase()) || '') &&
  //   (row.type?.toLowerCase().includes(search.toLowerCase()) || '')) &&
  //   (filterType === 'all' || row.type?.toLowerCase() === filterType) &&
  //   (filterStatus === 'all' || row.status?.toLowerCase() === filterStatus) &&
  //   (filterDuration === 'all' || row.duration?.toLowerCase() === filterDuration)
  // );
  
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            value={search}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              label="Type"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="type1">Type 1</MenuItem>
              <MenuItem value="type2">Type 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Duration</InputLabel>
            <Select
              value={filterDuration}
              onChange={(e) => setFilterDuration(e.target.value)}
              label="Duration"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="short">Short</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="long">Long</MenuItem>
            </Select>
          </FormControl>
          <IconButton onClick={handleSortClick}>
            <SortIcon />
          </IconButton>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Box>
        <Menu
          anchorEl={sortAnchorEl}
          open={Boolean(sortAnchorEl)}
          onClose={handleSortClose}
        >
          {columns.map((column) => (
            <MenuItem key={column.id} onClick={() => handleSort(column.id)}>
              Sort by {column.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.missionId}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
