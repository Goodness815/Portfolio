import React from "react";
import img from "../About Me/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-container" id="about">
        <div className="about-head">
          <h1>About Me -</h1>
        </div>
        <div className="about-case">
          <div className="about-body">
            <div
              className="abt-img"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={img} alt="" />
            </div>
            <div
              className="abt-text"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p>
                I am a Self-motivated Front-End Web Developer and that adds high
                level of experience for over more than 2 years collaborating and
                working on multiple web-based projects. I am a Passionate,
                hardworking coder with penchant for developing customized
                interfaces that factor in unique demands for accessibility,
                reachability and security. Organized approach to meeting
                multiple, concurrent deadlines.
              </p>
              <p>
                I pull from active knowledge of current technology landscape to
                promote best practices in web design. Seeking a Front-end
                Developer role to pursue my passion for developing effective and
                usefull User Interfaces and grow an emerging brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
