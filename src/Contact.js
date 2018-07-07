import React from 'react';

function Contact() {
    return (
      <div className="container contact-container" id="contact">
        <h2 className="skills-head">Contact</h2>
        <div className="map-bg">
          <div id="map" />
          <div className="map-overlay">
            <h3 className="contact-head">Around the Web</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/pravinbanjade9" target="_blank" className="social-btn" rel="tooltip" title="Follow me on Facebook" data-placement="bottom">
                  <i className="fa fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pravin_banjade/" target="_blank" className="social-btn" rel="tooltip" title="Follow me on Instagram" data-placement="bottom">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pravinbanjade/" target="_blank" className="social-btn" rel="tooltip" title="Connect with me on LinkedIn" data-placement="bottom">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/pravinbanjade" target="_blank" className="social-btn" rel="tooltip" title="Follow me on Github" data-placement="bottom">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/zedjazzl" target="_blank" className="social-btn" rel="tooltip" title="Follow me on twitter" data-placement="bottom">
                  <i className="fa fa-twitter" />
                </a>
              </li>
            </ul>
            <div className="row">
              <div className="col-md-6">
                <h3 className="contact-head">Give me a call</h3>
                <p className="contact-me"><a href="tel:9860298863"><i className="fa fa-phone" /> +977-986-029-8863</a></p>
              </div>
              <div className="col-md-6">
                <h3 className="contact-head">Mail me</h3>
                <p className="contact-me"><a href="mailto:pra@pravinb.com.np"><i className="fa fa-envelope" /> pra@pravinb.com.np</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Contact;
