import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
// import {
//   faLocationDot,
//   faPhone,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import main from "../../images/whitell.png";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="footer-info">
          <div className="subsribedLetter">
            <span className="bold"> Subscribe to Newsletter</span>
            <div className="detSubs">
              Subscribe now to receive tips on how to take your business to the
              next level.
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="inputSubs"
              />
              <Button variant="contained" className="btnSubs">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="footer-social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </div>

        <div className="grid-3">
          <span className="linkHeading">Company</span>
          <span className="linkHeading">Resources</span>
          <span className="linkHeading">Contact</span>
          <span className="links">About</span>
          <span className="links">Resume</span>
          <span className="links">kharepushkar2804@gmail.com</span>
          <span className="links">Our Process</span>
          {/* <span className="links"></span> */}
          <span className="links">Examples</span>
          <span className="links"></span>
          <span className="links">Job Interviews</span>
        </div>
      </div>
      <div className="copyright">© 2023 Growth. All rights reserved</div>
    </>
  );
};

export default Footer;
