import React from "react";
import { useNavigate } from "react-router-dom";
import templateImg from "../../images/template-1.png";
import "./Template.css";

const Template = () => {
  const nav = useNavigate();
  const openTemplate = () => {
    nav("/resumeTemplate");
  };
  return (
    <div>
      <div className="templateHeading middle"> Select a Template: </div>
      <div className="flex templateBox">
        <div className="templateImg" onClick={openTemplate}>
          <img src={templateImg} />
        </div>
        <div className="templateImg">
          <img src={templateImg} />
        </div>
      </div>
    </div>
  );
};

export default Template;
