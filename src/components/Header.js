import React, { Component } from 'react';
import '../App.css';

export default class Header extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="page-header title">
          <div className = "name">
            <h1 className="fname">MOLLY</h1><img className="volcano" src="./images/MOLLCANO.png" alt="volcano pic" /><h1 className="lname">BROOKS</h1>
          </div>
          <div className="subtitle">
            <h1 className="fullStack"><small>Full Stack Web Developer</small></h1>
          </div>
        </div>
      </div>
    )
  }
}
