import React, { useEffect } from "react";
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
// import axios from "axios";

const Login = () => {
  const nav = useNavigate();
  // Submit button
  useEffect(() => {
    let loginKey = localStorage.getItem("loginKey");
    if (!loginKey) {
      nav("/login");
    }
  }, []);
  const loginFunction = () => {
    console.log("login");
    // axios.post(`link/`,data)
    // .then((e)=>{
    //   console.log(e);
    // setLoginValues(initialLoginValue);
    //       if (e.data) {
    //         localStorage.setItem("loginKey", JSON.stringify(e.data));
    //         // logoutFlag= false;
    //         console.log(e.data);
    //         nav("/");
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
      <form className="loginForm">
        {/* Email */}
        <TextField
          // id="input-with-icon-textfield"
          label="Email"
          className="margin-2"
          type="email"
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
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
