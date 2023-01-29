import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";


const Experience = () => {
  
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">

        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3rd</div>
        <span  style={{color: darkMode?'white':''}}>Studying </span>
        <span>Year</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>DIT</div>
        <span  style={{color: darkMode?'white':''}}>College</span>
        <span>Name</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>CS</div>
        <span  style={{color: darkMode?'white':''}}>Branch</span>
        <span>Name</span>
      </div>
    </div>
  );
};

export default Experience;