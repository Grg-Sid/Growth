import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "../Card/Card";
import HomeImg from "../../images/homeImg.png";

const Home = () => {
  const nav = useNavigate();
  // useEffect(() => {
  //   let loginKey = localStorage.getItem("loginKey");
  //   let registerKey = localStorage.getItem("registerKey");
  //   if (loginKey) {
  //     localStorage.removeItem("loginKey");
  //   }
  //   if (registerKey) {
  //     localStorage.removeItem("registerKey");
  //   }
  // }, []);

  const login = () => {
    localStorage.setItem("loginKey", "true");
    nav("/login");
  };
  // const register = () => {
  //   localStorage.setItem("registerKey", "true");
  //   nav("/register");
  // };

  return (
    <div>
      {/* <div>
        <button onClick={login}>login</button>
        <button onClick={register}>Register</button>
      </div> */}
      <div>
        <div className="homeSection">
          <div className="homeHeading">
            A powerful solution to built your resume. Fast!
          </div>
          <div className="smallHomeHeading">
            Create a polished and professional resume with ease using our
            user-friendly builder. Quickly customize your resume for any job
            opportunity.
          </div>
          <Button variant="contained" className="btnHome" onClick={login}>
            Get Started
          </Button>
          <div>
            <img src={HomeImg} alt="Home" />
          </div>
        </div>
        <div className="homeHeading middle">
          Essential tools for propelling your Career forward
        </div>
        <div className="smallHomeHeading middle">
          applying for dream job is now easy and fast, choose from 100 of free,
          designer made template and customize them with a few click
        </div>
        <div className="pricing">
          <div className="homeHeading middle">Pricing</div>
          <div className="smallHomeHeading middle">
            A powerful solution to grow your startup A powerful solution to grow
            your startup
          </div>
          <div className="flexBox">
            <Card data="1" />
            <Card data="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
