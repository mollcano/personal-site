import React, { Component } from 'react';
import '../App.css';

export default class Contact extends Component{
  render(){
    return(
        <div className="container-fluid col-md-12">
          <div className="links">

              <a target="blank" href="https://github.com/mollcano"><img  className="contact" src="./images/github.png" alt="github link" /></a>


              <a target="blank" href="https://www.linkedin.com/in/mollcano/"><img className="contact" src="./images/linkedin.png" alt="linkedin link" /></a>


              <a target="blank" href="mailto:molly@mollcano.com"><img className="contact" src="./images/mail.png" alt="link to email" /></a>


              <a target="blank" href="https://drive.google.com/file/d/0B8SjphBDghvYS1c5S2NfbVRZNUk/view?usp=sharing"><img className="contact" src="./images/resume.png" alt="resume" /></a>

          </div>
        </div>

    )
  }
}
