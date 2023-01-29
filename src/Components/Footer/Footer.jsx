import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">

        <span>sahiljawale54@gmail.com</span>

        <div className="f-icons">

          <a href="http://instagram.com/sahiljawale54" target="_blank">
          <Insta size={"3rem"}/>
          </a>

          <a href="https://www.linkedin.com/in/sahiljawale54" target="_blank">
          <Linkedin size={"3rem"}/>
          </a>

          <a href="https://github.com/Sahiljawale54" target="_blank">
          <Github size={"3rem"}/>
          </a>

        </div> 
        {/* f-icons ends here */}
      </div>
    </div>
  );
};

export default Footer;