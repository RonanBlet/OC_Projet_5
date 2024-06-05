import React from "react";
import logo from '../Images/LOGO.png';
import petitLogo from '../Images/LOGO_petit.svg'

function Header(){
    return(
        <header>
            <span>
                <picture>
                    <source media="(max-width: 768px)" srcSet={petitLogo} />
                    <img src={logo} alt="Logo du site Kasa"  />
                </picture>
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