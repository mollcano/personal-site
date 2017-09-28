import React, { Component } from 'react';
import '../App.css';

export default class Header extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="page-header title">
          <div className = "name">
            <h1 className="fname"><span>&#123; Molly Brooks &#125;</span></h1>
          </div>
          <div className="subtitle">
            <h2 className="fullStack"><small>Full Stack Web Developer</small></h2>
          </div>
        </div>
      </div>
    )
  }
}
