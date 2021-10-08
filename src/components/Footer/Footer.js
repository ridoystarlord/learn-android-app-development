import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer py-2">
      <p>
        All Copy Right Goes to &copy;{" "}
        <NavLink className="go-to-home" to="/">
          www.learnandroidappdevelopment.com
        </NavLink>
      </p>
    </div>
  );
};

export default Footer;
