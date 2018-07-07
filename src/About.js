import React from 'react';
function About() {
    return (
      <div className="container about-container" id="about">
        <div className="row">
          <div className="col-md-8">
            <h2 className="about-head">About Me</h2>
            <h5 className="about-me">Front-End Developer and UX/UI designer, with practical experience in project management, branding strategy, and creative direction; working hard to make the Internet Awesome.</h5>
            <hr className="about-hr" />
            <h5 className="about-me">Web Developer &nbsp; | &nbsp; UI/UX Designer &nbsp; | &nbsp; Graphic Artist</h5>
          </div>
          <div className="col-md-4 img-align">
            <img src="./assets/img/mypic.JPG" alt="Pravin Banjade" className="rounded-circle img-raised my-img" />
          </div>
        </div>
      </div>
    );
  }

export default About;
