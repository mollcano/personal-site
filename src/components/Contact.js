import React, { Component } from 'react';
import '../App.css';

export default class Contact extends Component{
  render(){
    return(
        <div className="container-fluid col-md-12">
          <div className="col-md-3">
            <img src="./images/github.png" alt="github link" />
          </div>
          <div className="col-md-3">
            <img src="./images/linkedin.png" alt="linkedin link" />
          </div>
          <div className="col-md-3">
            <img src="./images/mail.png" alt="link to email" />
          </div>
          <div className="col-md-3">
            <img src="./images/phone.png" alt="phone number" />
          </div>
          </div>

    )
  }
}
