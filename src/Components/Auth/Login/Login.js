import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
// import OutlinedInput from "@mui/material/OutlinedInput";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import axios from "axios";

const rName = /^([a-zA-Z ]{2,20})$/;

const Login = () => {
  const nav = useNavigate();
  const initialLoginValue = {
    email: "",
    password: "",
  };
  const [loginValues, setLoginValues] = useState(initialLoginValue);
  // const [formErrors, setFormErrors] = useState({});
  // Submit button
  // useEffect(() => {
  //   let loginKey = localStorage.getItem("loginKey");
  //   if (!loginKey) {
  //     nav("/login");
  //   }
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    // console.log('check',formValues);
    setLoginValues({ ...loginValues, [name]: value });
    console.log(loginValues);
  };
  // useEffect(() => {}, [loginValues]);

  const registerFunction = () => {
    nav("/register");
  };
  const loginFunction = () => {
    // Checking name
    if (!rName.test(loginValues.email)) {
      // formErrors.name = "Enter valid name";
      console.log("error");
    }

    console.log("login");
    const data = {
      // username: loginValues.username,
      // password: loginValues.password,
      username: "kharepushkar@gmail.com",
      password: "123",
    };
    console.log(data);
    axios
      .post(`https://iitj-saumyxa.onrender.com/api/auth/login`, data)
      .then((e) => {
        console.log(e);
        setLoginValues(initialLoginValue);
        // if (e.data) {
        //   localStorage.setItem("loginKey", JSON.stringify(e.data));
        //   // logoutFlag= false;
        //   console.log(e.data);
        //   nav("/");
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="loginForm">
        <span className="margin-1 heading">Login</span>
        <span className="margin-1 ">
          Please fill in the details below to Get started!
        </span>
        {/* Email */}
        <TextField
          // id="input-with-icon-textfield"
          label="Email"
          className="margin-2"
          type="email"
          name="email"
          value={loginValues.email}
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
        {/* Submit */}
        <Button
          variant="contained"
          className="btnLogin"
          onClick={loginFunction}
        >
          Enter
        </Button>
        <span className="margin-1">OR</span>
        {/* Register */}
        <Button
          variant="contained"
          className="btnLogin"
          onClick={registerFunction}
        >
          Register
        </Button>
        <span className="margin-1">Dont have an Account?</span>
      </form>
    </div>
  );
};

export default Login;
