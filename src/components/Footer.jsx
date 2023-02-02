import React from "react";
import { formatYear } from "../helpers/index";
import Linkedin from "../public/linkedin.svg";
import Github from "../public/github.svg";

const Footer = () => {
  const year = Date.now();
  return (
    <div className="footerContainer">
      <div className="item">
        <div>This project belongs to my personal</div>
        <a target="_blank" href="https://nikollsabalu.netlify.app/">
          {" "}
          P O R T F O L I O
        </a>
      </div>

      <div className="footerCopyright item">
        &#169; {formatYear(year)} - Developed by Nikoll Sabalú
      </div>

      <div className="item">
        <div>S O C I A L</div>
        <a target="_blank" href="https://github.com/nikollsabalu">
          <img src={Linkedin} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/nikollsabalu/">
          <img src={Github} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
