import React from "react";
import './navbar.css'
import logo from '../assets/logo2.png';
import menu from '../assets/menu.svg';

const Navbar = () => {
    return (
        <div className="navbar">
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
                <img src={menu} alt="menu" />
            </div>
        </div>
    )
}

export default Navbar;