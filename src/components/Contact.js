import React, { Component } from 'react';
import '../App.css';

export default class Contact extends Component{
  render(){
    return(
        <div className="container-fluid col-md-12">
          <div className="links">

              <a target="_blank" href="https://github.com/mollcano"><img  className="contact" src="./images/github.png" alt="github link" /></a>


              <a target="_blank" href="https://www.linkedin.com/in/mollcano/"><img className="contact" src="./images/linkedin.png" alt="linkedin link" /></a>


              <a href="mailto:molly@mollcano.com"><img className="contact" src="./images/mail.png" alt="link to email" /></a>


              <a href="tel:+01-217-246-8502"><img className="contact" src="./images/phone.png" alt="phone number" /></a>
          
          </div>
        </div>

    )
  }
}
