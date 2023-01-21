import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./Form.css";
import BaseNav from "../Navbar/BaseNav";
const opening = () => {};

const Form = () => {
  return (
    <div className="formbox">
      <h1 className="title">Contact Information</h1>
      <p className="titlebase">
        Include at minimum your email and phone number
      </p>
      <div className="row">
        <TextField
          // id="input-with-icon-textfield"
          label="Name"
          className="entries"
          type="text"
          name="username"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                {/* <AccountCircle /> */}
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <label>
          <input placeholder="Last name" className="entries" type="text" />
          <img src="./Images/vector.png" />
        </label>
      </div>
      <div className="row">
        <div>
          <label>
            <input placeholder="Job" className="entries" type="text" />
            <img src="./Images/Vector.png" />
          </label>
          <label>
            <input type="file" placeholder="Browser" />
          </label>
        </div>
      </div>
      <div className="row">
        <label>
          <input
            placeholder="Address"
            className="entries address"
            type="text"
          />
          <img src="./Images/image 18.png" />
        </label>
      </div>
      <div className="row">
        <input className="entries" placeholder="City" type="text" />
        <input className="entries" placeholder="State" type="text" />
        <input className="entries" placeholder="ZipCode" type="text" />
      </div>
      <div className="row">
        <input placeholder="Phone" className="entries" type="tel" />
        <input placeholder="Email Address" className="entries" type="email" />
      </div>
      <div className="row">
        <div className="block">
          <button className="btn">
            <img src="./Images/Group 2684.png" onClick={opening} />
          </button>
        </div>
        <div className="block">
          <button className="btn">
            <img src="./Images/Group 2683.png" />
          </button>
        </div>
      </div>
      <div>
        <BaseNav />
      </div>
    </div>
  );
};

export default Form;
