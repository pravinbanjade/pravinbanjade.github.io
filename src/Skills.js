import React from 'react';

function Skills() {
    return (
      <div className="container skill-container" id="skills">
        <h2 className="skills-head">Skills &amp; Experience</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="progress-container">
              <span className="progress-badge">HTML5</span>
              <div className="progress">
                <div className="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>
                  <span className="progress-value">95%</span>
                </div>
              </div>
            </div>
            <div className="progress-container progress-primary">
              <span className="progress-badge">CSS3</span>
              <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                  <span className="progress-value">90%</span>
                </div>
              </div>
            </div>
            <div className="progress-container progress-success">
              <span className="progress-badge">javascript</span>
              <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                  <span className="progress-value">75%</span>
                </div>
              </div>
            </div>
            <div className="progress-container progress-info">
              <span className="progress-badge">ReactJS</span>
              <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                  <span className="progress-value">60%</span>
                </div>
              </div>
            </div>
            <div className="progress-container progress-warning">
              <span className="progress-badge">git &nbsp; | &nbsp; github &nbsp; | &nbsp; gitlab</span>
              <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                  <span className="progress-value">85%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="experience">
              <div className="experience-date">
                <h5>2018</h5>
                <h6>Intern</h6>
              </div>
              <div className="experience-detail">
                <h5>Website Developer</h5>
                <h6>ReactJS</h6>
              </div>
            </div>
            <div className="experience">
              <div className="experience-date">
                <h5>2018</h5>
                <h6>Intern</h6>
              </div>
              <div className="experience-detail">
                <h5>Version Control Software</h5>
                <h6>Git | Github | gitlab</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Skills;
