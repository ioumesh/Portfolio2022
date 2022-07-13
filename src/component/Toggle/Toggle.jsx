import React from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleToggle = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle">
      <Moon />
      <Sun />
      <div
        className="t-button"
        onClick={handleToggle}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
