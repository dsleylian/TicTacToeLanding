import React from "react";
import flameGif from '../images/FlameOn.gif';
import sample_1 from '../images/tictactoe-screenshot1.png';
import sample_2 from '../images/tictactoe-screenshot2.png';
import sample_3 from '../images/tictactoe-screenshot3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';

function Project(){

  return(
    <div id="home" className="project-container">
        <div className="project-content">
        <div className="title-container">
        <img className="torch" src={flameGif} alt="torch with flame on" height="200px"/>
        <h1>Tic Tac Toe</h1>
        <img className="torch" src={flameGif} alt="torch with flame on" height="200px"/>
        </div>
            <h2>How to Use </h2>
            <p>This Tic Tac Toe game was created to allow you to play against yourself or against a friend who is there with you. You first choose which player goes first (X or O), and take turns. When a player wins, a banner will show who won. At this point you can restart the game by pressing the "Start Over" button. </p>
            <ul className="color-button-ul">
                <li className="color-button" > 
                    <a href="https://tictactoe-sgtheme.surge.sh/">Play Now</a>
                </li>
            </ul>
            <h2>Development tools</h2>
            <ul className="icons-ul">
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faJs} size="3x"/>  
                    <p>Javascript</p>
                </li>
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faHtml5} size="3x"/>
                    <p>HTML</p>
                </li>
                <li className="tool-card"> 
                    <FontAwesomeIcon icon={faCss3} size="3x"/>
                    <p>CSS</p>
                </li>
            </ul>
            <h2>Screenshots</h2>
        </div>
        <div className="project-samples">
            <img className="sample" height="200px" src={sample_1} alt="sample" />    
            <img className="sample" height="200px" src={sample_2} alt="sample" />    
            <img className="sample" height="200px" src={sample_3} alt="sample" />    
        </div>
        <div className="project-content-video">
        <h2>Video Walkthrough</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qjZHUpBGNwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
        </div>
    </div>
  )
}

export default Project;