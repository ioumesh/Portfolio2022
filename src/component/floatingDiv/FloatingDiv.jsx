import React from "react";
import "./floatingdiv.scss";
const FloatingDiv = ({ image, text1, text2 }) => {
  return (
    <div className="floatingDiv">
      <img src={image} alt="floatingdiv" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
