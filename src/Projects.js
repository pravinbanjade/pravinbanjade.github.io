import React from 'react';

function Projects() {
    return (
      <div className="container project-container" id="project">
        <h2 className="skills-head">Projects</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 project-card">
            <div className="project-img-div">
              <img src="./assets/img/bg13.png" alt="bg1" className="project-img" />
              <a href="http://aabhastea.com" target="_blank">
                <div className="project-overlay">
                  <h2>Aabhash Tea</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 project-card">
            <div className="project-img-div">
              <img src="./assets/img/bg14.png" alt="bg1" className="project-img" />
              <a href="https://www.teanepal.com/" target="_blank">
                <div className="project-overlay">
                  <h2>Nepal Tea</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 project-card">
            <div className="project-img-div">
              <img src="./assets/img/bg15.png" alt="bg1" className="project-img" />
              <a href="http://grs.edu.np/" target="_blank">
                <div className="project-overlay">
                  <h2>GRS</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Projects;
