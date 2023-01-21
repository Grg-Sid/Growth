import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../images/logo.png";
import "./Navbar.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  fontSize: "2rem",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  fontSize: "2rem",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ButtonAppBar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const loginFunction = () => {
    if (loginOpen === false) setLoginOpen(true);
    else setLoginOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" className="navBox">
        <Toolbar className="flex navBar">
          <img src={logo} alt="logo" className="logo" />

          <ul className="navBarList">
            <li>Home</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            color="primary"
            variant="contained"
            size="large"
            className="navBtn bigFont"
            onClick={loginFunction}
          >
            Join Us
          </Button>
        </Toolbar>
      </AppBar>

      {/* Login Box */}

      {loginOpen && (
        <div className="popupWrapper">
          <span className="closeBtn" onClick={loginFunction}>
            X
          </span>
          <div className="popupBox navPop">
            <Tabs
              defaultActiveKey="login"
              id="uncontrolled-tab-example"
              className="mb-3 bigFont"
              justify
            >
              <Tab eventKey="login" title="Login">
                <Login />
              </Tab>
              <Tab eventKey="register" title="Register">
                <Register />
              </Tab>
            </Tabs>
          </div>
        </div>
      )}
    </Box>
  );
}
