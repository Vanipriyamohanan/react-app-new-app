import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className=" left">
          <div className="location">
            <FaHome size={20} style={{ color: "#000", marginRight: "2rem" }} />
            <div>
              <p> Mon-Friday 9-6 pm </p>
              <p> Mon-Sunday 8-5 pm </p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#000", marginRight: "2rem" }}
              />
              +971 52 531 7264
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#000", marginRight: "2rem" }}
              />
              sales@plus971.ae
            </h4>
          </div>
        </div>
        <div className="right">
          <p>
            Plus 971 FZE, based in UAE (Dubai Airport Free Zone), is licensed in
            trading of games consoles, mobile phones, electronic equipment and
            computer hardware
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
