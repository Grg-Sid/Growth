import React from "react";
import { useNavigate } from "react-router-dom";
import "./BaseNav.css";

const BaseNav = () => {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/");
  };
  const education = () => {
    navigate("./Education");
  };
  return (
    <div>
      <hr className="line" />
      <ul className="baselist">
        <li className="baselistelement" onClick={contact}>
          Contact Information
        </li>
        <li className="baselistelement" onClick={education}>
          Education
        </li>
        <li className="baselistelement">Work Experience</li>
        <li className="baselistelement">Key Skills</li>
        <li className="baselistelement">Profile</li>
        <li className="baselistelement">Complete</li>
      </ul>
      <button className="save">Save</button>
      <button className="continue">Continue</button>
    </div>
  );
};

export default BaseNav;
