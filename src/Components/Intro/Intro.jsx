import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Intro.css'
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import {motion} from 'framer-motion';


const Intro = () => {

  // Transition
  const transition = { duration: 1.5, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
        <span style={{ color: darkMode ? "white" : "" }}>Hello, I'm</span>
          <span>Sahil Jawale.</span>
          <span>Pursuing BE in Computer Engineering and currently a Third Year undergrad,<br/>
          I am a Passionate Competitive Programmer and Aspiring Software Engineer.<br/>
          I want to collaborate and utilise my skills for the organization...
          </span>
        </div>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=sahiljawale54@gmail.com&tf=cm" target='_blank'>

        <button className="i-button button">Hire Me</button>
        </a>

        <div className="i-icons">
          <a href="https://github.com/sahiljawale54" target='_blank'>
            <img src={Github} alt="github logo" />
          </a>
          <a href="https://www.linkedin.com/in/sahiljawale" target="_blank" >
            <img src={LinkedIn} alt="linkedin logo" />
          </a>
          <a href="https://www.instagram.com/sahiljawale54/" target="_blank">
            <img src={Instagram} alt="instagram logo" />
          </a>
        </div>
      </div>

      <div className="i-right">

        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "6rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Competitive" text2="Programmer" />
        </motion.div>

        {/* background blur div */}
        <div className="blur" 
        style={{ background: "rgb(238 210 255)" }}>
        </div>
        
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro
