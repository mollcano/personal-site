import React, { Component } from 'react';
import '../App.css';

export default class Header extends Component{
  render(){
    return(
      <div className="row">
        <div className="container-fluid col-md-8 myProjects">
          <h3 className="project-label">Projects</h3>
          <div className="col-md-6 project">
            <div className="project-dets">
              <div className="thumbnail">
                <img className="projectPic" src="./images/mic-background.jpg" alt="speak up thumbnail" />
                <div className="description speakOverlay"><h4 className="project-title">Speak Up</h4><p className="project-script">Do you love public speaking? Me neither. Speak Up aims to help you become a better pubic speaker by analyzing different aspects of speech data, including fillers, clarity, pace, and pauses. The app outputs graphs on the different aspects so that you can track your improvement.  <p><em>Built with: IBM Watson Speech-to-Text, Vue.JS, D3.JS, CSS3, HTML5, Node.JS, Express, Knex.JS, PostgreSQL</em></p></p>
                <div className="projLinkCont">
                  <a href="https://ispeakup.co"><img className="project-links" src="./images/computer.png" alt="website link" /></a>
                  <a href="https://ispeakup.co"><img className="project-links" src="./images/github-proj.png" alt="website link" /></a>
                  <a href="https://ispeakup.co"><img className="project-links" src="./images/youtube.png" alt="website link" /></a>
                </div>
                </div>
              </div>
            </div>
            <div class="caption">
              <div className="buttons">
                <a href="#" className="btn btn-primary" role="button">Github</a> <a href="#" className="btn btn-default" role="button">YouTube</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 project">
            <div className="project-dets">
              <div className="thumbnail">
                <img className="projectPic" src="./images/fitness3.jpeg" alt="speak up thumbnail" />
                <div className="description strengthOverlay"><h4 className="project-title">Strength in Numbers</h4><p className="project-script">Coming up with a strength training plan can be tough.  Strength in Numbers aims to take the guesswork out of coming up with a workout plan.  You tell us how many days a week that you can commit to strength training, and we'll give you a quick and simple to follow routine. <br /> <em>Built with: HTML5, CSS3, JavaScript, jQuery, Wger.de API</em></p>
                  <div className="projLinkCont">
                    <a href="https://ispeakup.co"><img className="project-links" src="./images/computer.png" alt="website link" /></a>
                    <a href="https://ispeakup.co"><img className="project-links" src="./images/github-proj.png" alt="website link" /></a>
                    <a href="https://ispeakup.co"><img className="project-links" src="./images/youtube.png" alt="website link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="caption">
              <div className="buttons">
                <a href="#" className="btn btn-primary" role="button">Github</a> <a href="#" className="btn btn-default" role="button">YouTube</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 project">
            <div className="project-dets">
              <div className="thumbnail">
                <img className="projectPic" src="./images/mic-background.jpg" alt="speak up thumbnail" />
                <div className="description speakOverlay"><h4 className="project-title">Speak Up</h4><p className="project-script">Do you love public speaking? Me neither. Speak Up aims to help you become a better pubic speaker by analyzing different aspects of speech data, including fillers, clarity, pace, and pauses. The app outputs graphs on the different aspects so that you can track your improvement.  <p><em>Built with: IBM Watson Speech-to-Text, Vue.JS, D3.JS, CSS3, HTML5, Node.JS, Express, Knex.JS, PostgreSQL</em></p></p>
                <div className="projLinkCont">
                  <a href="https://ispeakup.co"><img className="project-links" src="./images/computer.png" alt="website link" /></a>
                  <a href="https://ispeakup.co"><img className="project-links" src="./images/github-proj.png" alt="website link" /></a>
                  <a href="https://ispeakup.co"><img className="project-links" src="./images/youtube.png" alt="website link" /></a>
                </div>
                </div>
              </div>
            </div>
            <div class="caption">
              <div className="buttons">
                <a href="#" className="btn btn-primary" role="button">Github</a> <a href="#" className="btn btn-default" role="button">YouTube</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 project">
            <div className="project-dets">
              <div className="thumbnail">
                <img className="projectPic" src="./images/fitness3.jpeg" alt="speak up thumbnail" />
                <div className="description strengthOverlay"><h4 className="project-title">Strength in Numbers</h4><p className="project-script">Coming up with a strength training plan can be tough.  Strength in Numbers aims to take the guesswork out of coming up with a workout plan.  You tell us how many days a week that you can commit to strength training, and we'll give you a quick and simple to follow routine. <br /> <em>Built with: HTML5, CSS3, JavaScript, jQuery, Wger.de API</em></p>
                  <div className="projLinkCont">
                    <a href="https://ispeakup.co"><img className="project-links" src="./images/computer.png" alt="website link" /></a>
                    <a href="https://ispeakup.co"><img className="project-links" src="./images/github-proj.png" alt="website link" /></a>
                    <a href="https://ispeakup.co"><img className="project-links" src="./images/youtube.png" alt="website link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="caption">
              <div className="buttons">
                <a href="#" className="btn btn-primary" role="button">Github</a> <a href="#" className="btn btn-default" role="button">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </div>



    )
  }
}
