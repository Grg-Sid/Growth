import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import main from "../../images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="footer-info">
          <div>
            <img className="MainName" src={main} alt="" />
          </div>
          <div class="bottom-footer_about">
            We are India's most trusted and transparent crowdfunding platform,
            with a vision to create a social impact. Our unique model allows
            people from across the globe to donate towards raising funds for
            products required by NGOs and charities in India, which are then
            delivered to them by us.
          </div>
          <div className="footer-social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-Heading">Links</div>
          <ul className="footerLink">
            <li className="links">Home</li>
            <li className="links">About Us</li>
            <li className="links">FAQs</li>
            <li className="links">Contact</li>
          </ul>
        </div>

        <div className="footer-Contact">
          <div className="contact-Heading">Contact Us</div>
          <div>
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="main-location"> Head Office , India</div>
            </div>
            <div className="contact-detail">
              27th KM Milestone, Delhi - Meerut Expy, Ghaziabad, Uttar Pradesh
              201009
            </div>
          </div>
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} />
            <div className="contact-detail"> 9999955665</div>
          </div>
          <div className="mail">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="contact-detail"> info@donate.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
