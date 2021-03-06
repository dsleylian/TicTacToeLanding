import React from "react";
import logo from '../images/whiteLogo.svg';

function Header() {

  return(
    <div>
      <div className="navbar">
        <a href="/"><img alt="logo" id="logo"src={logo}></img></a>
        <ul className="navbar-links">
          <li>
              <a href="/">Home</a>
          </li>
          <li>
            <a className="about-large-screen"href="#developer">About the Developer</a>
            <a className="about-small-screen" href="#developer">About</a>
          </li>
          <li className="button" > 
              <a href="https://tictactoe-sgtheme.surge.sh/">Play Now</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;