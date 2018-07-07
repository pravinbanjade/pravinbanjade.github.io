import React, { Component } from 'react';
import './App.css';
import NavBar from './Navbar';
import Parallax from './Parallax';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Parallax />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
