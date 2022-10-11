import React from "react";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div>
      <div className="footer-case">
        <hr />
        <div className="footer-inner">
          <div className="dual-footer">
            <div className="footer-brand">
              <a href="mailto:sewogoodness@yahoo.com">sewogoodness@yahoo.com</a>
              <br />
              <span>
                <a
                  className="footer-wa"
                  href="https://wa.me/+2349052222556"
                  target="_blank"
                >
                  wa.me/+2349052222556
                </a>
              </span>
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/11djpXk5thekyYtiBdyZoXNPXIVRQpt1a/view?usp=sharing">
                    resume
                  </a>
                </li>
                <li>
                  <HashLink to="#contact" smooth>
                    contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <h3>copyright@sewogoodness 2022</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
