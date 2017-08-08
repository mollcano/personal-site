import React, { Component } from 'react';
import '../App.css';

export default class Header extends Component{
  render(){
    return(
      <div className="row">
        <div className="container-fluid col-md-8 myProjects">
          <h3 className="project-label">Projects</h3>
          <div className="col-md-4 project">
            <div className="project-dets">
              <a href="https://ispeakup.co" className="thumbnail">
                <img className="projectPic" src="./images/speak-up.png" alt="speak up thumbnail" />
                <div className="description"><h4 className="project-title">Speak Up</h4><p className="project-script">Do you love public speaking? Me neither. Speak Up aims to help you become a better pubic speaker by analyzing different aspects of speech data, including fillers, clarity, pace, and pauses. The app outputs graphs on the different aspects so that you can track your improvement. <br /> <em>Built with: IBM Watson Speech-to-Text, Vue.JS, D3.JS, CSS3, HTML5, Node.JS, Express, Knex.JS, PostgreSQL</em></p></div>
              </a>
            </div>
            <div class="caption">
              <div className="buttons">
                <a href="#" className="btn btn-primary" role="button">Github</a> <a href="#" className="btn btn-default" role="button">YouTube</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 project">
            <div className="project-dets">
              <a href="https://strength.mollcano.com" className="thumbnail">
                <img className="projectPic" src="./images/strength-in-nums.png" alt="speak up thumbnail" />
                <div className="description"><h4 className="project-title">Strength in Numbers</h4><p className="project-script">Coming up with a strength training plan can be tough.  Strength in Numbers aims to take the guesswork out of coming up with a workout plan.  You tell us how many days a week that you can commit to strength training, and we'll give you a quick and simple to follow routine. <br /> <em>Built with: HTML5, CSS3, JavaScript, jQuery, Wger.de API</em></p></div>
              </a>
            </div>
            <div class="caption">
              <div className="buttons">
                <a href="#" className="btn btn-primary" role="button">Github</a> <a href="#" className="btn btn-default" role="button">YouTube</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 project">
            <div className="project-dets">
              <a href="https://ispeakup.co" className="thumbnail">
                <img className="projectPic" src="./images/speak-up.png" alt="speak up thumbnail" />
                <div className="description"><h4 className="project-title">Speak Up</h4><p className="project-script">Do you love public speaking?  Me neither.  Speak Up aims to help you become a better pubic speaker by analyzing different aspects of speech data, such as, number of filler words used, clarity of speech, pace, and pause lengths.  The app outputs graphs on the different aspects so that you can track your improvement. <br /> <em>Built with: IBM Watson Speech-to-Text, Vue.JS, D3.JS, CSS3, HTML5, Node.JS, Express, Knex.JS, PostgreSQL</em></p></div>
              </a>
            </div>
            <div class="caption">
              <div className="buttons">
                <a href="#" className="btn btn-primary" role="button">Github</a> <a href="#" className="btn btn-default" role="button">YouTube</a>
              </div>
            </div>
          </div>
          <div className="col-md-5 project">
            <h3 className="project-title">Speak Up</h3>
            <div className="project-dets">
              <a href="https://ispeakup.co" className="thumbnail">
                <img className="projectPic" src="./images/speak-up.png" alt="speak up thumbnail" />
                <div className="description"><h4>Speak Up</h4><p>Do you love public speaking?  Me neither.  Speak Up aims to help you become a better pubic speaker by analyzing different aspects of speech data, such as, number of filler words used, clarity of speech, pace, and pause lengths.  The app outputs graphs on the different aspects so that you can track your improvement. <br /> <em>Built with: IBM Watson Speech-to-Text, Vue.JS, D3.JS, CSS3, HTML5, Node.JS, Express, Knex.JS, PostgreSQL</em></p></div>
              </a>
            </div>
            <div class="caption">
              <div className="buttons">
                <a href="#" className="btn btn-primary" role="button">Github</a> <a href="#" className="btn btn-default" role="button">YouTube</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="project-title">Strength in Numbers</h3>
            <a href="#" class="thumbnail">
              <img className="projectPic" src="./images/strength-in-nums.png" alt="..." />
            </a>
            <div class="caption">
              <p>Coming up with a strength training plan can be tough.  Strength in Numbers aims to take the guesswork out of coming up with a workout plan.  You tell us how many days a week that you can commit to strength training, and we'll give you a simple to follow, fast routine.</p>
              <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
          <div className="col-md-6">
            <a href="#" class="thumbnail">
              <img className="projectPic" src="./images/MOLLCANO.png" alt="..." />
            </a>
            <div class="caption">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="col-md-6">
            <a href="#" class="thumbnail">
              <img className="projectPic" src="./images/MOLLCANO.png" alt="..." />
            </a>
            <div class="caption">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="col-md-6">
            <a href="#" class="thumbnail">
              <img className="projectPic" src="./images/MOLLCANO.png" alt="..." />
            </a>
            <div class="caption">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>



    )
  }
}
