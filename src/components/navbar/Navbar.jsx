import React, { useState } from "react";
import './navbar.css'
import logo from '../assets/logo2.png';
import menu from '../assets/menu.svg';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar" id="home">
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="navbar_menu">
                <div className="navbar__menu">
                    <p><a href="#home">HOME</a></p>
                    <p><a href="#about">ABOUT ME</a></p>
                    <p><a href="#projects">PROJECTS</a></p>
                    <p><a href="#contact">CONTACT</a></p>
                </div>
            </div>

            <div className="navbar__menu2">
                {toggleMenu
                    ? <img src={menu} onClick={() => setToggleMenu(false)} alt="menu" />
                    : <img src={menu} onClick={() => setToggleMenu(true)} alt="menu" />
                }
                {toggleMenu && (
                    <div className="navbar__menu3 scale-up-center">
                        <div className="navbar__menu3-links">
                            <p><a href="#home">HOME</a></p>
                            <p><a href="#about">ABOUT ME</a></p>
                            <p><a href="#projects">PROJECTS</a></p>
                            <p><a href="#contact">CONTACT</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;