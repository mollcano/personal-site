import React, { Component } from 'react';
import '../App.css';

export default class About extends Component{
  render(){
    return(
      <div className="container-fluid col-md-3 about">
        <h3 className="aboutMe">&#91; ABOUT ME &#93;</h3>
        <img className="myPic" src="./images/MollyPic.jpg" alt="Molly" />
        <p>I'm a psychologist turned web developer. I enjoy solving new problems and coming up with ways to make my life and other's lives easier. My passion for people transfers nicely into developing products with users in mind. I love the mix of developing a simple, yet beautiful front-end site with the exciting problem solving aspects of developing the back-end.</p>

        <p>Learning new things keeps my fire for coding alive, and, luckily, in web development, there is always something new to learn.  When I'm not programming, you can find me in the mountains exploring new territory, or just on my couch watching Netflix and eating pizza.  Now that you know more about me, check out my projects, or if you are really interested, shoot me an email.</p>
        </div>
    )
  }
}
