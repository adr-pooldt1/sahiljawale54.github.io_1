import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Works.css";
import mysql from "../../img/mysql.svg";
import reacti from "../../img/react-icon.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'


const Works = () => {
  //context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            What skills I have
          </span>
          <span>My Experience</span>
          <span>
            Programming Language: C/C++, Python, Java 
            <br/>
            Frontend Development: HTML, CSS, JavaScript, Bootstrap, Reactjs
            <br />
            Backend Development: Mysql, MongoDB, Firebase
            <br></br>
            Tools & Technology: Git and Github
          </span>

          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
        </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 50 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={html} alt="html logo" />
          </div>
          <div className="w-secCircle">
            <img src={css} alt="css logo" />
          </div>
          <div className="w-secCircle">
            <img src={reacti} alt=" reactjs logo" /> 
          </div>{" "}
          <div className="w-secCircle resize">
            <img src={js} alt=" javascript logo" />
          </div>
          <div className="w-secCircle resize">
            <img src={mysql} alt=" mysql logog" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;