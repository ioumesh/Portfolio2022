import React from "react";
import "./intro.scss";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";

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
          <a href="https://github.com/ioumesh" target="_blank" rel="noreferrer">
            <img src={Github} alt="social-icon" />
          </a>
          <a href="https://github.com/ioumesh" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="social-icon" />
          </a>
          <a href="https://github.com/ioumesh" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="social-icon" />
          </a>
        </div>
      </div>
      <div className="introRight">
        <div className="imgContainer">
          <img src={Vector1} alt="blob" />
          <img src={Vector2} alt="blob" />
          <img src={boy} alt="boy" />
          <img src={glassesimoji} alt="glass-emoji" />
        </div>
        <div className="floatingWrapperRight">
          <FloatingDiv image={crown} text1={"Web"} text2={"Developer"} />
        </div>
        <div className="floatingWrapperLeft">
          <FloatingDiv image={thumbup} text1={"Best Design"} text2={"Award"} />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
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
  );
};

export default Intro;
