import React from "react";
import logo from '../Images/LOGO.png';
function Header(){
    return(
        <header>
            <span>
                <img src={logo} alt="logo du site Kasa"/>
            </span>
            <nav>
                <ul>
                    <li><a href='/'>Accueil</a></li>
                    <li id="about"><a href='/about'>A propos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;