import React from 'react';

function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">
                  About
                </a>
              </li>
              <li>
                <a href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#project">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
          <div className="vl" />
          <div className="copyright">
            © {(new Date().getFullYear())}, Built with &nbsp; <i className="fa fa-coffee" /> &nbsp; &amp; &nbsp; <i className="fa fa-heart footer-love" />
          </div>
        </div>
      </footer>
    );
  }

export default Footer;
