import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <div className="navbarLeft">
        <div className="navbarName">Dev Umesh</div>
        <span>Toggle</span>
      </div>
      <div className="navbarRight">
        <div className="navbarList">
          <ul className="navbarListItem">
            <li className="navbarMenuList">Home</li>
            <li className="navbarMenuList">Services</li>
            <li className="navbarMenuList">Experience</li>
            <li className="navbarMenuList">Portfolio</li>
            <li className="navbarMenuList">Testimonials</li>
          </ul>
        </div>
        <button className="button btn">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
