import React from "react";
import './summary.css';
import linkedIn from '../assets/linkedin.png';
import git from '../assets/github.svg';
import html from '../assets/html-5.svg';
import css from '../assets/css-3.svg';
import js from '../assets/javascript.svg';

const Template = () => (
    <div className="template__body">

    </div>    
)

const Summary = () => {
    return (
        <div>
            <div className="summary" id="summary">
                <div className="summary__head">
                    <div className="summary__header">
                        <h1>Front-End React Developer</h1>
                        <p>Hi, I'm Ayoolu Omoyiola. A passionate Front-end React Developer based in Lagos, Nigeria</p>

                        <div className="summary__firstIcons">
                            <a href="https://www.linkedin.com/in/ayoolu-omoyiola/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedIn Logo"/></a>
                            <a href="https://github.com/EdwardAyo" target="_blank" rel="noreferrer"><img src={git} width={"50px"} alt="GitHub Logo"/></a>
                        </div>
                    </div>

                    <div className="summary__header2">
                        <h2>Tech Stack:</h2>
                        <div className="summary__secIcons">
                            <img src={html} alt="HTML Logo"/>
                            <img src={css} alt="CSS Logo"/>
                            <img src={js} alt="JavaScript Logo"/>
                            {/* <img src={react2} alt="React Logo"/> */}
                        </div>
                    </div>        
                </div>
            </div>
                

            <div className="blog" id="blog">
                <div className="blog__image">
                    
                </div>

                <div className="blog__text">
                    <div className="blog__textInner">
                        <div className="blog_innerText">
                            <h2>About Me</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="project__header">
                <div className="project__tab1">
                    <div className="project__innerText">
                        <h2>Projects</h2>
                        <p>You can find projects I've worked on below</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="templates">
                    <Template />
                </div>
                <div className="templates">
                    <Template />
                </div>
                <div className="templates">
                    <Template />
                </div>
            </div>
            
        </div>
    )
}

export default Summary;