import "./Otp.css";
// import React from "react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import "./Register.css";
// import { TextField } from "@mui/material";
import { Input } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
// import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import axios from "axios";

const Otp = () => {
  const nav = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const otpObject = {};

  const [otpVal, setOtpVal] = useState(otpObject);
  const [invalid, setInvalid] = useState(false);

  const handleOtpValue = (e) => {
    // console.log(e.target.value);
    // console.log('initial',otpVal);
    setOtpVal({ otp: e.target.value.toString() });
    if (e.target.value.length === 4) e.target.blur();
    // console.log('final',otpVal);
  };
  const verifyOtp = (e) => {
    e.preventDefault();
    console.log(otpVal);
    axios
      .post(`https://iitj-saumyxa.onrender.com/api/auth/otp`, otpVal)
      .then((e) => {
        console.log(e);
        if (e.data === "Valid") {
          localStorage.removeItem("otpKey");
          localStorage.setItem("verificationKey", "active");
          nav("/verification");
        } else setInvalid(true);
      })
      .catch((error) => {
        console.log(error);
        setInvalid(true);
      });
  };
  return (
    <div>
      <form className="registerForm">
        <span className="margin-1 heading">OTP VERIFICATION</span>
        <span className="margin-1 ">
          Please fill in the details below to Get started!
        </span>
        {/* Password */}
        <FormControl
          // sx={{ m: 1, width: "25ch" }}
          className="margin-2"
          variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-password">OTP</InputLabel>
          <Input
            id="standard-adornment-password"
            onChange={handleOtpValue}
            name="otp"
            // value={otp}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* Submit */}
        <Button variant="contained" className="btnLogin" onClick={verifyOtp}>
          Verify
        </Button>
        <span className="middle resend" onClick={verifyOtp}>
          Resend OTP
        </span>
      </form>
    </div>
  );
};

export default Otp;
