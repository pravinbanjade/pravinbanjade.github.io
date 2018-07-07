import React from 'react';
function Parallax() {
    return (
      <div className="parallax-div" id="home">
        <div data-parallax="true" className="parallax-bg" />
        <div className="overlay-img" />
        <div className="parallax-content">
          <h2 className="parallax-head">Hello,</h2>
          <h2 className="parallax-description">I'm</h2>
          <h2 className="parallax-description">Pravin Banjade</h2>
          {/* Typewriter */}
          <h4><div id="messenger" /></h4>
          {/* End Typewriter */}
        </div>
      </div>
    );
  }

export default Parallax;
