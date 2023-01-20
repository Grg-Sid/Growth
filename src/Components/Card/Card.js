import { Button } from "@mui/material";
import React from "react";
import "./Card.css";

const Card = (num) => {
  return num.data ? (
    <div className="wrapcard">
      <span className="cardHeading">Simple</span>
      <div>
        Keep track of your contacts, gain valuable insights, analyse live data
        and performance metrics.
      </div>
      <span className="cardPrice">Free</span>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Button variant="contained" className="btnCard">
        Get Started
      </Button>
    </div>
  ) : (
    <div className="wrapcard wrapcardPremium">
      <span className="cardHeading ">Premium</span>
      <div>
        Keep track of your contacts, gain valuable insights, analyse live data
        and performance metrics.
      </div>
      <div className="cardPrice">Rs 490</div>
      {/* <hr /> */}
      <span>Everything from the free plan plus:</span>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Button variant="contained" className="btnCard">
        Get Started
      </Button>
    </div>
  );
};

export default Card;
