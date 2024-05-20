import React from "react";

function Header(){
    return(
        <header>
            <h1>Kasa</h1>
            <nav>
                <ul>
                    <li><a href='/'>Accueil</a></li>
                    <li><a href='/about'>A propos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;