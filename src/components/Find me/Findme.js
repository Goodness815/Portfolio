import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import "./Findme.css";

const Findme = () => {
  return (
    <div>
      <div className="find-case">
        <div className="find-title">
          <h1>
            Find <br /> <span>Me -</span>
          </h1>
        </div>

        <div className="find-body">
          <div className="find-grid">
            <a
              href="https://www.linkedin.com/in/sewo-goodness-8080401bb"
              target="_blank"
            >
              <div
                className="find-item"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="inner-flex">
                  <span>
                    {" "}
                    <AiFillLinkedin className="find-icon" />
                  </span>
                  <div className="inner-text">
                    <a
                      href="https://www.linkedin.com/in/sewo-goodness-8080401bb"
                      target="_blank"
                    >
                      Linkedin
                    </a>{" "}
                    <br />
                    <span>sewo goodness</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://github.com/Goodness815" target="_blank">
              <div
                className="find-item"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="inner-flex">
                  <span>
                    {" "}
                    <AiFillGithub className="find-icon" />{" "}
                  </span>
                  <div className="inner-text">
                    <a href="https://github.com/Goodness815" target="_blank">
                      Github
                    </a>{" "}
                    <br />
                    <span>Goodness819</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://twitter.com/sewogoodness" target="_blank">
              <div
                className="find-item"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="inner-flex">
                  <span>
                    {" "}
                    <AiOutlineTwitter className="find-icon" />{" "}
                  </span>
                  <div className="inner-text">
                    <a href="https://twitter.com/sewogoodness" target="_blank">
                      Twitter
                    </a>{" "}
                    <br />
                    <span>sewo goodness</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://wa.me/+2349052222556" target="_blank">
              <div
                className="find-item"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="inner-flex">
                  <span>
                    {" "}
                    <ImWhatsapp className="find-icon" />{" "}
                  </span>
                  <div className="inner-text">
                    <a href="https://wa.me/+2349052222556" target="_blank">
                      Whatsapp
                    </a>{" "}
                    <br />
                    <span>sewo goodness</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://www.facebook.com/sewo.goodness" target="_blank">
              <div
                className="find-item"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="inner-flex">
                  <span>
                    {" "}
                    <AiFillFacebook className="find-icon" />{" "}
                  </span>
                  <div className="inner-text">
                    <a
                      href="https://www.facebook.com/sewo.goodness"
                      target="_blank"
                    >
                      Facebook
                    </a>{" "}
                    <br />
                    <span>sewo goodness</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com/_sewo_goodness/" target="_blank">
              <div
                className="find-item"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="inner-flex">
                  <span>
                    {" "}
                    <AiFillInstagram className="find-icon" />{" "}
                  </span>
                  <div className="inner-text">
                    <a
                      href="https://www.instagram.com/_sewo_goodness/"
                      target="_blank"
                    >
                      Instagram
                    </a>{" "}
                    <br />
                    <span>sewo goodness</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findme;
