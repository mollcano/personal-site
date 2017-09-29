import React, { Component } from 'react';
import '../App.css';

export default class Contact2 extends Component{
  render(){
    return(
        <div className="container-fluid col-md-3 col-sm-4 col-xs-12">
          <div className="links2">

              <a target="blank" href="https://github.com/mollcano"><img  className="contact2" src="./images/github.png" alt="github link" /></a>


              <a target="blank" href="https://www.linkedin.com/in/mollcano/"><img className="contact2" src="./images/linkedin.png" alt="linkedin link" /></a>


              <a target="blank" href="mailto:molly@mollcano.com"><img className="contact2" src="./images/mail.png" alt="link to email" /></a>


              <a target="blank" href="https://drive.google.com/file/d/0B8SjphBDghvYV2lYdEVORnJYaVU/view?usp=sharing"><img className="contact2" src="./images/resume.png" alt="resume" /></a>

          </div>
        </div>

    )
  }
}
