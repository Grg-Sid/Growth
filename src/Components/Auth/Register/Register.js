import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
// import axios from "axios";

const Register = () => {
  const nav = useNavigate();

  useEffect(() => {
    let registerKey = localStorage.getItem("registerKey");
    if (!registerKey) {
      nav("/login");
    }
  }, []);
  //   Submit Button
  const registerFunction = () => {
    console.log("register");
    // axios.post(`link/`,data)
    // .then((e)=>{
    //   console.log(e);
    // if (e.data === "Registered") {
    //     localStorage.setItem("otpKey", "active");
    //     nav("/enterOtp");
    //   }
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="registerForm">
        {/* Name */}
        <TextField
          label="Name"
          variant="outlined"
          //   sx={{ m: 1, width: "50ch" }}
        />
        {/* Email */}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          autoComplete="username"
          //   sx={{ m: 1, width: "50ch" }}
        />
        {/* Name */}
        <TextField
          label="Name"
          variant="outlined"
          //   sx={{ m: 1, width: "50ch" }}
        />
        {/* Password */}
        <FormControl
          // sx={{ m: 1, width: "50ch" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {/* Submit */}
        <Button
          variant="contained"
          className="btnRegister"
          onClick={registerFunction}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Register;
