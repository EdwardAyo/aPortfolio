import React from "react";
import './summary.css';
import linkedIn from '../assets/linkedin.png';
import git from '../assets/github.svg';
import html from '../assets/html-5.svg';
import css from '../assets/css-3.svg';
import js from '../assets/javascript.svg';
import reactimage from '../assets/react.png';
import portait from '../assets/portrait.jpg';
import shot from '../assets/shot.png';
import shot2 from '../assets/shot2.png';
import shot3 from '../assets/shot3.png';
import mini from '../assets/mini.png';

const Summary = () => {
    return (
        <div>
            <div className="summary" id="summary">
                <div className="summary__head">
                    <div className="summary__header">
                        <div className="summary__header-text">
                            <h1>Front-End React Developer</h1>
                            <p>Hi, I'm Ayoolu Omoyiola. A passionate Front-end React Developer based in Lagos, Nigeria</p>
                            <a href="https://www.linkedin.com/in/ayoolu-omoyiola/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedIn Logo"/></a>
                            <a href="https://github.com/EdwardAyo" target="_blank" rel="noreferrer"><img src={git} width={"50px"} alt="GitHub Logo"/></a>
                        </div>

                        <div className="summary__header-image">
                            <img src={portait} alt="portrait" />
                        </div>
                    </div>

                    <div className="summary__header2">
                            <h2>Tech Stack:</h2>
                        <div className="summary__secIcons">
                            <img src={html} alt="HTML Logo"/>
                            <img src={css} alt="CSS Logo"/>
                            <img src={js} alt="JavaScript Logo"/>
                            <img src={html} alt="HTML Logo"/>
                            <img src={css} alt="CSS Logo"/>
                            <img src={js} alt="JavaScript Logo"/>                                                        
                        </div>
                    </div>
                </div>
            </div>
                

            <div className="blog" id="about">
                <div className="blog__image">
                    
                </div>

                <div className="blog__text">
                    <div className="blog__textInner">
                        <div className="blog_innerText">
                            <h2>About Me</h2>
                            <p><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/></p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/><br/></p>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="project__header" id="projects">
                <div className="project__tab1">
                    <div className="project__innerText">
                        <h2>Projects</h2>
                        <p>You can find projects I've worked on below</p>
                    </div>
                </div>
            </div>

            <div className="templates">
                <div className="template__body">
                    <img src={shot} alt="shot" />

                    <div className="template__text">
                        <h1>RED TV</h1>
                        <p>
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <div className="template__image">
                            <img src={html} alt="html" />
                            <img src={css} alt="css" />
                            <img src={js} alt="javascript" />
                        </div>

                        <div className="template__image2">
                            <div className="template_image1">
                                <img src={git} alt="git" />
                                <p>GitHub</p>
                            </div>
                            
                            <div className="template_image2">
                                <img src={reactimage} alt="react" />
                                <p>Live demo</p>
                            </div>
                        </div>
                    </div>                    
                </div>

                <div className="template__body">
                    <img src={shot2} alt="shot2" />

                    <div className="template__text">
                        <h1>SLACK</h1>
                        <p>
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <div className="template__image">
                            <img src={html} alt="html" />
                            <img src={css} alt="css" />
                            <img src={js} alt="javascript" />
                        </div>

                        <div className="template__image2">
                            <div className="template_image1">
                                <img src={git} alt="git" />
                                <p>GitHub</p>
                            </div>
                            
                            <div className="template_image2">
                                <img src={reactimage} alt="react" />
                                <p>Live demo</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="template__body">
                    <img src={shot3} alt="shot3" />

                    <div className="template__text">
                        <h1>FIGMA</h1>
                        <p>
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <div className="template__image">
                            <img src={html} alt="html" />
                            <img src={css} alt="css" />
                            <img src={js} alt="javascript" />
                        </div>

                        <div className="template__image2">
                            <div className="template_image1">
                                <img src={git} alt="git" />
                                <p>GitHub</p>
                            </div>
                            
                            <div className="template_image2">
                                <img src={reactimage} alt="react" />
                                <p>Live demo</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="miniProjects">
                    <div className="miniProjects__header">
                        <h2>Mini Projects</h2>
                        <p>This section includes projects from the beginning of my programming education and technologies in which I am just beginning to learn</p>
                    </div>
                    
                    <div className="miniProjects__content">
                        <div className="content__first">
                            <img src={mini} alt="mini" className="mini" />
                            <div className="description">
                                <p>React application with Bootstrap styles and firebase authentication</p>
                                <img src={git} alt="git" className="git" />
                            </div>
                        </div>

                        <div className="content__first">
                            <img src={mini} alt="mini" className="mini" />
                            <div className="description">
                                <p>React application with Bootstrap styles and firebase authentication</p>
                                <img src={git} alt="git" className="git" />
                            </div>
                        </div>

                        <div className="content__first">
                            <img src={mini} alt="mini" className="mini" />
                            <div className="description">
                                <p>React application with Bootstrap styles and firebase authentication</p>
                                <img src={git} alt="git" className="git" />
                            </div>
                        </div>

                        <div className="content__first">
                            <img src={mini} alt="mini" className="mini" />
                            <div className="description">
                                <p>React application with Bootstrap styles and firebase authentication</p>
                                <img src={git} alt="git" className="git" />
                            </div>
                        </div>

                        <div className="content__first">
                            <img src={mini} alt="mini" className="mini" />
                            <div className="description">
                                <p>React application with Bootstrap styles and firebase authentication</p>
                                <img src={git} alt="git" className="git" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Summary;