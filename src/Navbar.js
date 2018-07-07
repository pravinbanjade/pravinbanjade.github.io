import React from 'react';
function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top " color-on-scroll={400}>
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand" href="#home" rel="tooltip" title="Front-end Designer and Developer" data-placement="bottom">
              <img src="./assets/img/favicon3.png" alt="PB" height={40} /> &nbsp; Pravin Banjade
            </a>
            <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarPravin" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarPravin" data-nav-image="../assets/img/blurred-image-1.jpg">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <p className="nav-link-p">Home</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <p className="nav-link-p">About</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <p className="nav-link-p">Skills</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  <p className="nav-link-p">Projects</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <p className="get-in-touch">Contact</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

export default NavBar;
