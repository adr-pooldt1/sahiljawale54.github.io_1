import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import {motion} from 'framer-motion';
const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services">
      <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
                I enjoy building unique interfaces with Javascript and Reactjs. <br />
        I'm open to Front-end development opportunities. <br />
        If you like what you see and have a project you need to be coded, <br />
        don’t hesitate to contact me.
        </span>
        <a href="https://drive.google.com/u/0/uc?id=1MHBtwW2dJnQqAplmYbzfNzDqKp_tx94U&export=download" download>
            <button className="s-button button">Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right  side */}
      <div className="cards">

        {/* first card */}
        <motion.div
          initial={{ left: "30rem"}}
          whileInView={{ left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Back-end Developer"}
            detail={"Java, Nodejs, PHP, Git, Python"}
          />
        </motion.div>
        
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "10rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Front-end Developer"}
            detail={"Html, Css, JavaScript, React, Bootstrap, Tailwind"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "19rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Database"}
            detail={
              "MySQL, MongoDB, Firebase"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services
