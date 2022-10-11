import React from "react";
import ajimobi from "../Projects/ajimobi.jpg";
import sheda from "../Projects/sheda.jpg";
import sgmodel from "../Projects/sgmodel.jpg";
import loruki from "../Projects/loruki.jpg";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <div className="project-case" id="projects">
        <div className="project-head">
          <h1>
            Featured <br /> <span>Projects -</span>
          </h1>
        </div>
        <div className="project-body" >
          <div
            className="project-item "
            data-aos="zoom-in-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="project-img-case">
              <img src={ajimobi} alt="" />
            </div>
            <div className="project-name">
              <h2>Ajimobi Website</h2>
            </div>

            <div className="project-para">
              <p>A portfolio and photo gallery</p>
            </div>
            <div className="project-flex">
              <div className="project-works">
                <span>design, product, developnment</span>
              </div>
              <div className="project-button">
                <a href="https://florenceajimobi.com" target="_blank">
                  {" "}
                  <button>View Site</button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="project-item"
           
            data-aos="zoom-in-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="project-img-case">
              <img src={sgmodel} alt="" />
            </div>
            <div className="project-name">
              <h2>Shinning Glory</h2>
            </div>

            <div className="project-para">
              <p>An interactive school website</p>
            </div>
            <div className="project-flex">
              <div className="project-works">
                <span>design, product, developnment</span>
              </div>
              <div className="project-button">
                <a href="https://sgmodelschool.com" target="_blank">
                  {" "}
                  <button>View Site</button>
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item rd-div"
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="project-img-case">
              <img src={sheda} alt="" />
            </div>
            <div className="project-name">
              <h2>Sheda House</h2>
            </div>

            <div className="project-para">
              <p>A creative community for young people</p>
            </div>
            <div className="project-flex">
              <div className="project-works">
                <span>design, product, developnment</span>
              </div>
              <div className="project-button">
                <a href="https://shedahouse.com" target="_blank">
                  {" "}
                  <button>View Site</button>
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            data-aos="fade-up-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="project-img-case">
              <img src={loruki} alt="" />
            </div>
            <div className="project-name">
              <h2>Loruki Web Deployment</h2>
            </div>

            <div className="project-para">
              <p>A quality web deployment service</p>
            </div>
            <div className="project-flex">
              <div className="project-works">
                <span>design, product, developnment</span>
              </div>
              <div className="project-button">
                <a href="https://lorukideployment.netlify.app" target="_blank">
                  {" "}
                  <button>View Site</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="view-projects"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <a href="https://github.com/Goodness815" target="_blank">
            <button>View All Projects </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
