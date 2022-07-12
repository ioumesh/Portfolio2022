import React from "react";
import "./intro.scss";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
const Intro = () => {
  return (
    <div className="introWrapper">
      <div className="introLeft">
        <div className="introName">
          <span>Hy! I Am</span>
          <span>Dev Umesh</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button btn">Hire me</button>
        <div className="introIcons">
          <img src={Github} alt="social-icon" />
          <img src={Linkedin} alt="social-icon" />
          <img src={Instagram} alt="social-icon" />
        </div>
      </div>
      <div className="introRight">right</div>
    </div>
  );
};

export default Intro;
