import React from "react";
import "./Showcase.css";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import "animate.css";
const Showcase = () => {
  return (
    <div className="showcase" id="showcase">
      <div className="text-flex">
        <div>
          <h2
            data-aos="zoom-out-left"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <span>I</span> DESIGN
          </h2>
          <div className="inner-text-flex">
            <h1
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Websites
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Apps
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Products
            </h1>
          </div>

          {/* PRACTICE DIVS */}

          <div className="content">
            <div className="title">
              <div
                className="slider"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div>
                  {" "}
                  <h1>Products</h1>
                </div>
                <div>
                  <h1>Apps</h1>
                </div>
                <div>
                  <h1>Websites</h1>
                </div>
              </div>
            </div>
          </div>

          {/* PRACTICE DIVS */}
        </div>

        <HashLink to="#projects">
          <div className="scroll-rotate">
            <span className="scroll-down animate__animated animate__zoomIn animate__delay-3s animate__slow animate__infinite	">
              <IoIosArrowBack />
              <IoIosArrowBack /> <span> Scroll Down </span>
            </span>
          </div>
        </HashLink>

        <HashLink to="#contact" smooth>
          <div className="message-div">
            <BsFillChatRightTextFill className="message-icon" />
          </div>
        </HashLink>
      </div>
    </div>
  );
};

export default Showcase;
