import React, { useState } from 'react';
import {
  Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, Chip, TextField, MenuItem, Select, InputLabel, FormControl, Box,
  Pagination, Grid, Button
} from '@mui/material';
import snapchat from "../../assets/logos/snapchat.svg";
import PaginatedTable from '../../helpers/PaginatedTable';

 const missions = [
    { id: 1, name: "Create a Reel for Gujrat Tourism on twitter", missionId: "982918279201921", brand: "Snapchat Opinion", start: "12/04/2023, 12:00 PM", end: "12/04/2023, 12:00 PM", status: "Completed", type: "Giveaway", role: "Admin" },
    { id: 2, name: "Create a Reel for Gujrat Tourism on Instagram", missionId: "982918279201920", brand: "Snapchat Opinion", start: "12/04/2023, 12:00 PM", end: "12/04/2023, 12:00 PM", status: "Evaluating", type: "Internship", role: "Admin" },
    { id: 3, name: "Create a Reel for Gujrat Tourism on Instagram", missionId: "982918279201920", brand: "Snapchat Opinion", start: "12/04/2023, 12:00 PM", end: "12/04/2023, 12:00 PM", status: "Completed", type: "Money", role: "Admin" },
    { id: 4, name: "Create a Reel for Gujrat Tourism on Instagram", missionId: "982918279201920", brand: "Snapchat Opinion", start: "12/04/2023, 12:00 PM", end: "12/04/2023, 12:00 PM", status: "Completed", type: "Giveaway", role: "Moderator" },
    { id: 5, name: "Create a Reel for Gujrat Tourism on Instagram", missionId: "982918279201920", brand: "Snapchat Opinion", start: "12/04/2023, 12:00 PM", end: "12/04/2023, 12:00 PM", status: "Evaluating", type: "Internship", role: "Moderator" },
    { id: 6, name: "Create a Reel for Gujrat Tourism on Instagram", missionId: "982918279201920", brand: "Snapchat Opinion", start: "12/04/2023, 12:00 PM", end: "12/04/2023, 12:00 PM", status: "Completed", type: "Money", role: "Moderator" },
    { id: 7, name: "Create a Reel for Gujrat Tourism on Instagram", missionId: "982918279201920", brand: "Snapchat Opinion", start: "12/04/2023, 12:00 PM", end: "12/04/2023, 12:00 PM", status: "Completed", type: "Giveaway", role: "Evaluator" },
    { id: 8, name: "Create a Reel for Gujrat Tourism on Instagram", missionId: "982918279201920", brand: "Snapchat Opinion", start: "12/04/2023, 12:00 PM", end: "12/04/2023, 12:00 PM", status: "Evaluating", type: "Internship", role: "Evaluator" },
    { id: 9, name: "Create a Reel for Gujrat Tourism on Instagram", missionId: "982918279201920", brand: "Snapchat Opinion", start: "12/04/2023, 12:00 PM", end: "12/04/2023, 12:00 PM", status: "Completed", type: "Money", role: "Evaluator" },
  ];
const getStatusChipColor = (status) => {
  switch (status) {
    case "Completed":
      return "success";
    case "Evaluating":
      return "warning";
    default:
      return "default";
  }
};

const AssignedToMeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRoleChange = (event) => {
    setFilterRole(event.target.value);
  };

  const handleStatusChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleSort = (column) => {
    const isAsc = sortColumn === column && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSortColumn(column);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const filteredMissions = missions
    .filter((mission) =>
      mission.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterRole === "All" || mission.role === filterRole) &&
      (filterStatus === "All" || mission.status === filterStatus) &&
      (filterType === "All" || mission.type === filterType)
    )
    .sort((a, b) => {
      if (sortColumn === "name") {
        return (sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
      } else if (sortColumn === "start") {
        return (sortDirection === "asc" ? new Date(a.start) - new Date(b.start) : new Date(b.start) - new Date(a.start));
      } else if (sortColumn === "end") {
        return (sortDirection === "asc" ? new Date(a.end) - new Date(b.end) : new Date(b.end) - new Date(a.end));
      } else if (sortColumn === "missionId") {
        return (sortDirection === "asc" ? a.missionId.localeCompare(b.missionId) : b.missionId.localeCompare(a.missionId));
      }
      return 0;
    });

  const paginatedMissions = filteredMissions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const groupedMissions = paginatedMissions.reduce((acc, mission) => {
    if (!acc[mission.role]) {
      acc[mission.role] = [];
    }
    acc[mission.role].push(mission);
    return acc;
  }, {});

  return (
    <Container>
      {/* Search and Filters */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={2}
        p={2}
        bgcolor="#f8f9fa"
        borderRadius="4px"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>Role</InputLabel>
              <Select value={filterRole} onChange={handleRoleChange} label="Role">
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Moderator">Moderator</MenuItem>
                <MenuItem value="Evaluator">Evaluator</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>Status</InputLabel>
              <Select value={filterStatus} onChange={handleStatusChange} label="Status">
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Evaluating">Evaluating</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>Type</InputLabel>
              <Select value={filterType} onChange={handleTypeChange} label="Type">
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Giveaway">Giveaway</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
                <MenuItem value="Money">Money</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Missions Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => handleSort("name")}>Name</TableCell>
              <TableCell onClick={() => handleSort("missionId")}>Mission ID</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell onClick={() => handleSort("start")}>Start</TableCell>
              <TableCell onClick={() => handleSort("end")}>End</TableCell>
              <TableCell>Mission Status</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(groupedMissions).map((role) => (
              <React.Fragment key={role}>
                <TableRow style={{ backgroundColor: role === "Admin" ? '#f0fdf4' : role === "Moderator" ? '#fef2f2' : '#e3f2fd' }}>
                  <TableCell colSpan={7}>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                      {role}
                    </Typography>
                  </TableCell>
                </TableRow>
                {groupedMissions[role].map((mission) => (
                  <TableRow key={mission.id}>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <img src={snapchat} alt='snapchat' style={{ marginRight: 8 }} />
                        {mission.name}
                      </Box>
                    </TableCell>
                    <TableCell>{mission.missionId}</TableCell>
                    <TableCell>{mission.brand}</TableCell>
                    <TableCell>{mission.start}</TableCell>
                    <TableCell>{mission.end}</TableCell>
                    <TableCell>
                      <Chip label={mission.status} color={getStatusChipColor(mission.status)} />
                    </TableCell>
                    <TableCell>{mission.type}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
   
      <PaginatedTable totalItems={40} />


    </Container>
  );
};

export default AssignedToMeTable;
