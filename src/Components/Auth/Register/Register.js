import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
// import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import axios from "axios";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Input from "@mui/material/Input";

const Register = () => {
  const nav = useNavigate();

  // const initalValues = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // };
  const initialLoginValue = {
    username: "",
    password: "",
  };
  // const [values, setValues] = useState(initalValues);
  const [loginValues, setLoginValues] = useState(initialLoginValue);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(e.target.values);
  //   console.log(name, value);
  //   // console.log('check',formValues);
  //   setValues({ ...values, [name]: value });
  //   console.log(values);
  // };

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    // console.log(name, value);
    // console.log('check',formValues);
    setLoginValues({ ...loginValues, [name]: value });
    console.log(loginValues);
  };

  useEffect(() => {
    let registerKey = localStorage.getItem("registerKey");
    if (!registerKey) {
      nav("/login");
    }
  }, []);
  //   Submit Button
  function registerFunction() {
    console.log("register");
    const data = {
      username: loginValues.email,
      password: loginValues.password,
    };
    console.log(data);
    axios
      .post(`https://iitj-saumyxa.onrender.com/api/auth/register`, data)
      .then((e) => {
        console.log(e);
        if (e.data === "Registered") {
          localStorage.setItem("otpKey", "active");
          nav("/enterOtp");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="registerForm">
        <span className="margin-1 heading">Signup</span>
        <span className="margin-1 ">
          Please fill in the details below to Get started!
        </span>
        {/* Email */}
        <TextField
          // id="input-with-icon-textfield"
          label="Email"
          className="margin-2"
          type="email"
          name="username"
          value={loginValues.username}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        {/* Password */}
        <FormControl
          // sx={{ m: 1, width: "25ch" }}
          className="margin-2"
          variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            onChange={handleChange}
            name="password"
            value={loginValues.password}
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
        {/* Confirm Password */}
        <FormControl
          // sx={{ m: 1, width: "25ch" }}
          className="margin-2"
          variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-password">
            Confirm Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            onChange={handleChange}
            name="cpassword"
            value={loginValues.cpassword}
            type={showPassword2 ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                >
                  {showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* Submit */}
        <Button
          variant="contained"
          className="btnLogin"
          onClick={registerFunction}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
