import React from "react";
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return <div>
       <header className="header navbar-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="nav-inner">
                        
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand BrAnd" href="/">
                            GetYourWork
                            </a>
                            <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ms-auto">
                                    
                                    <li className="nav-item">
                                        <a href="#features" className="page-scroll"
                                            aria-label="Toggle navigation">Services</a>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <a href="#TEam" className="page-scroll"
                                            aria-label="Toggle navigation">Team</a>
                                    </li>
                                    <li className="nav-item">
                                    {/* <Link to="sbachb"> */}
                                        <a
                                         href="/about"
                                          aria-label="Toggle navigation">About</a>
                                          {/* </Link> */}
                                    </li>
                                   
                                    <li className="nav-item">
                                        <a href="/contact" aria-label="Toggle navigation">Contact</a>
                                    </li>
                                </ul>
                            </div> 
                            <div className="button add-list-button">
                                <a href="javascript" class="btn">Say hi</a>
                            </div>
                        </nav>
                        
                    </div>
                </div>
            </div> 
        </div> 
    </header>
    </div>
};

export default Navbar;