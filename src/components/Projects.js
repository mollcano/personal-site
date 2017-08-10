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
                  <a target="blank" href="https://ispeakup.co"><img className="project-links" src="./images/computer.png" alt="website link" /></a>
                  <a target="_blank" href="https://github.com/mollcano/speak-up-frontend"><img className="project-links" src="./images/github-proj.png" alt="website link" /></a>
                  <a target="blank" href="https://youtu.be/U6TFJulHPQc"><img className="project-links" src="./images/youtube.png" alt="website link" /></a>
                </div>
                </div>
              </div>
            </div>
            <div class="caption">
              <div className="phone-description">
                <h4>Speak Up</h4>
                <p>Do you love public speaking? Me neither. Speak Up aims to help you become a better pubic speaker by analyzing different aspects of speech data, including fillers, clarity, pace, and pauses. The app outputs graphs on the different aspects so that you can track your improvement.
                <p><em>Built with: IBM Watson Speech-to-Text, Vue.JS, D3.JS, CSS3, HTML5, Node.JS, Express, Knex.JS, PostgreSQL</em></p>
                </p>
                <div className="projLinkCont">
                  <a target="blank" href="https://ispeakup.co"><img className="project-links" src="./images/computer.png" alt="website link" /></a>
                  <a target="blank" href="https://github.com/mollcano/speak-up-frontend"><img className="project-links" src="./images/github-proj.png" alt="website link" /></a>
                  <a target="blank" href="https://youtu.be/U6TFJulHPQc"><img className="project-links" src="./images/youtube.png" alt="website link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 project">
            <div className="project-dets">
              <div className="thumbnail">
                <img className="projectPic" src="./images/fitness3.jpeg" alt="speak up thumbnail" />
                <div className="description strengthOverlay"><h4 className="project-title">Strength in Numbers</h4><p className="project-script">Coming up with a strength training plan can be tough.  Strength in Numbers aims to take the guesswork out of coming up with a workout plan.  You tell us how many days a week that you can commit to strength training, and we'll give you a quick and simple to follow routine. <br /> <em>Built with: HTML5, CSS3, JavaScript, jQuery, Wger.de API</em></p>
                  <div className="projLinkCont">
                    <a target="blank" href="https://strength.mollcano.com"><img className="project-links" src="./images/computer.png" alt="website link" /></a>
                    <a target="blank" href="https://github.com/mollcano/Q1-Project"><img className="project-links" src="./images/github-proj.png" alt="website link" /></a>
                    <a target="blank" href="https://youtu.be/ISjL8d0AQUw"><img className="project-links" src="./images/youtube.png" alt="website link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="caption">
              <div className="phone-description">
                <h4>Strength In Numbers</h4>
                <p>Coming up with a strength training plan can be tough.  Strength in Numbers aims to take the guesswork out of coming up with a workout plan.  You tell us how many days a week that you can commit to strength training, and we'll give you a quick and simple to follow routine. <br /> <em>Built with: HTML5, CSS3, JavaScript, jQuery, Wger.de API</em></p>
                <div className="projLinkCont">
                  <a target="blank" href="https://strength.mollcano.com"><img className="project-links" src="./images/computer.png" alt="website link" /></a>
                  <a target="blank" href="https://github.com/mollcano/Q1-Project"><img className="project-links" src="./images/github-proj.png" alt="website link" /></a>
                  <a target="blank" href="https://youtu.be/ISjL8d0AQUw"><img className="project-links" src="./images/youtube.png" alt="website link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 project">
            <div className="project-dets">
              <div className="thumbnail">
                <img className="projectPic" src="./images/concert.jpg" alt="speak up thumbnail" />
                <div className="description grooveOverlay"><h4 className="project-title">GrooveBass</h4><p className="project-script">Are you a music lover who enjoys going to local shows? GrooveBass returns a list of concerts based on location and creates a customized Spotify playlist based on the upcoming concerts in your area so that you can always be groovin' to your zipcode's tunes.  <p><em>Built with: ReactNatve, Sketch, JavaScript, Spotify API, JamBase API</em></p></p>
                <div className="projLinkCont">
                  <a target="blank" href="https://github.com/Groove-Bass/Groove-Bass-the-Repo"><img className="project-links2" src="./images/github-proj.png" alt="website link" /></a>
                  <a target="blank" href="https://youtu.be/pY8IAGtAmU8"><img className="project-links2" src="./images/youtube.png" alt="website link" /></a>
                </div>
                </div>
              </div>
            </div>
            <div class="caption">
              <div className="phone-description">
                <h4>GrooveBass</h4>
                <p>Are you a music lover who enjoys going to local shows? GrooveBass returns a list of concerts based on location and creates a customized Spotify playlist based on the upcoming concerts in your area so that you can always be groovin' to your zipcode's tunes.  <p><em>Built with: ReactNatve, Sketch, JavaScript, Spotify API, JamBase API</em></p></p>
                <div className="projLinkCont">
                  <a target="blank" href="https://github.com/Groove-Bass/Groove-Bass-the-Repo"><img className="project-links2" src="./images/github-proj.png" alt="website link" /></a>
                  <a target="blank" href="https://youtu.be/pY8IAGtAmU8"><img className="project-links2" src="./images/youtube.png" alt="website link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 project">
            <div className="project-dets">
              <div className="thumbnail">
                <img className="projectPic" src="./images/art3.png" alt="speak up thumbnail" />
                <div className="description artOverlay"><h4 className="project-title">Beast Jesus</h4><p className="project-script">Do you ever see artwork and think, "I could do that"? Now you can try. Beast Jesus challenges a user to recreate famous artwork using a pixel art maker. <br /> <em>Built with: HTML5, CSS3, JavaScript, jQuery, PostgreSQL, Express, Knex.JS, Node.JS</em></p>
                  <div className="projLinkCont">
                    <a target="blank" href="http://beast-jesus.herokuapp.com/"><img className="project-links" src="./images/computer.png" alt="website link" /></a>
                    <a target="blank" href="https://github.com/beast-jesus/Beast-Jesus"><img className="project-links" src="./images/github-proj.png" alt="website link" /></a>
                    <a target="blank" href="https://youtu.be/Bf3t8VU7fR8"><img className="project-links" src="./images/youtube.png" alt="website link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="caption">
              <div className="phone-description">
                <h4>Beast Jesus</h4>
                <p>Do you ever see artwork and think, "I could do that"? Now you can try. Beast Jesus challenges a user to recreate famous artwork using a pixel art maker. <br /> <em>Built with: HTML5, CSS3, JavaScript, jQuery, PostgreSQL, Express, Knex.JS, Node.JS</em></p>
                <div className="projLinkCont">
                  <a target="blank" href="http://beast-jesus.herokuapp.com/"><img className="project-links" src="./images/computer.png" alt="website link" /></a>
                  <a target="blank" href="https://github.com/beast-jesus/Beast-Jesus"><img className="project-links" src="./images/github-proj.png" alt="website link" /></a>
                  <a target="blank" href="https://youtu.be/Bf3t8VU7fR8"><img className="project-links" src="./images/youtube.png" alt="website link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 project">
            <div className="project-dets">
              <div className="thumbnail">
                <img className="projectPic" src="./images/drink.jpg" alt="speak up thumbnail" />
                <div className="description drinkOverlay"><h4 className="project-title">Hail Ya!</h4><p className="project-script">Hail Ya provides drink recipes for your next party using your local forecasted weather as one of the ingredients. Cross your fingers for hail!<br /> <em>Built with: JavaScript, HTML5, CSS3, jQuery, AJAX, Illustrator</em></p>
                  <div className="projLinkCont">
                    <a target="blank" href="https://hail-ya.firebaseapp.com/"><img className="project-links2" src="./images/computer.png" alt="website link" /></a>
                    <a target="blank" href="https://github.com/and-the-winners-are/hail_ya"><img className="project-links2" src="./images/github-proj.png" alt="website link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="caption">
              <div className="phone-description">
                <h4>Beast Jesus</h4>
                <p>Hail Ya provides drink recipes for your next party using your local forecasted weather as one of the ingredients. Cross your fingers for hail!<br /> <em>Built with: JavaScript, HTML5, CSS3, jQuery, AJAX, Illustrator</em></p>
                <div className="projLinkCont">
                  <a target="blank" href="https://hail-ya.firebaseapp.com/"><img className="project-links2" src="./images/computer.png" alt="website link" /></a>
                  <a target="blank" href="https://github.com/and-the-winners-are/hail_ya"><img className="project-links2" src="./images/github-proj.png" alt="website link" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    )
  }
}
