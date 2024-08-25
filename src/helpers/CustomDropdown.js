import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function TypeDropdown() {
  const [type, setType] = React.useState('All');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel htmlFor="type-select">Type:</InputLabel>
      <Select
        label="Type:"
        value={type}
        onChange={handleChange}
        displayEmpty
        inputProps={{
          name: 'type',
          id: 'type-select',
        }}
        style={{ minWidth: 120 }}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Option1">Option 1</MenuItem>
        <MenuItem value="Option2">Option 2</MenuItem>
        <MenuItem value="Option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
}

export default TypeDropdown;
