import React, { useRef } from "react";
import ham from "../Navbar/menu.svg";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const navRef = useRef(null);
  console.log(navRef.current);
  const openNav = () => {
    navRef.current.style.width = `${100}%`;
  };
  const closeNav = () => {
    navRef.current.style.width = `${0}px`;
  };

  return (
    <div>
      <div id="mySidenav" className="sidenav" ref={navRef}>
        <div className="side-cancel">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
        </div>
        <div className="center-side">
          <HashLink to="#projects" smooth onClick={closeNav}>Projects</HashLink>
          <HashLink to="#about" smooth onClick={closeNav}>About</HashLink>
          <HashLink to="#contact" smooth onClick={closeNav}>
            Contact
          </HashLink>

          <a
            href="https://drive.google.com/file/d/11djpXk5thekyYtiBdyZoXNPXIVRQpt1a/view?usp=sharing"
            onClick={closeNav}
            download
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="nav-container">
        <div className="nav-brand">
          <HashLink to="#showcase" smooth >Sewo Goodness</HashLink>
        </div>

        <div className="nav-contact">
          <a
            href="https://drive.google.com/file/d/11djpXk5thekyYtiBdyZoXNPXIVRQpt1a/view?usp=sharing"
            download
            target="_blank"
          >
            {" "}
            <button>Download CV</button>
          </a>
          <img onClick={openNav} src={ham} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
