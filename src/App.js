import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact2 from './components/Contact2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contact2 />
        <Header />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
