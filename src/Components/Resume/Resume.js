import React from "react";
// import OutlinedInput from "@mui/material/OutlinedInput";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Select } from "@mui/material";
const Resume = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      {/* Name */}
      <TextField label="Full Name" variant="outlined" />
      {/* City */}
      <TextField label="City" variant="outlined" />
      {/* Email */}
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        autoComplete="username"
        //   sx={{ m: 1, width: "50ch" }}
      />
      {/* Mobile */}
      <TextField
        label="Mobile"
        type="number"
        variant="outlined"
        // autoComplete="username"
        //   sx={{ m: 1, width: "50ch" }}
      />
      {/* Pin Code */}
      <TextField
        label="Pin Code"
        type="number"
        variant="outlined"
        // autoComplete="username"
        //   sx={{ m: 1, width: "50ch" }}
      />
      {/* Address */}
      <TextField
        label="Address"
        variant="outlined"
        autoComplete="username"
        //   sx={{ m: 1, width: "50ch" }}
      />

      {/* Education section */}

      {/* Current Job Title */}
      <TextField
        label="Job title"
        variant="outlined"
        autoComplete="username"
        //   sx={{ m: 1, width: "50ch" }}
      />
      {/* State */}
      <InputLabel id="demo-simple-select-label">State</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
};

export default Resume;
