import React from 'react';


const Footer=()=>{
return <footer className="footer">
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                    <div className="single-footer f-about">
                        <div className="logo">
                        <a className="navbar-brand BrAnd" href="/">
                            QueLeap
                            </a>
                        </div>
                        <p>helping you to land on your dream job</p>
                      
                        
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#MOck">Mock Interview</a></li>
                                    <li><a href="#CVr">Cv Reviewing</a></li>
                                    <li><a href="#MEntor">Mentoring</a></li>
                                 
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Follow Us</h3>
                                <ul>
                                    
                                    <li><a  href="https://twitter.com/thequeleap">Twitter</a></li>
                                    <li><a href="xs">linkedin</a></li>
                                    <li><a  href="https://www.instagram.com/que_leap/">Instagram</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="asd">About Us</a></li>
                                    <li><a href="asd">Our Team</a></li>
                                   
                                    <li><a href="asd">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                            <h3>Get in touch</h3>
                             <form className="newsletter">
                    <input type="email" placeholder="email address" id="footer-email" />
                    <input type="submit" placeholder="subscribe" id="footer-email-btn" />
                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
};

export default Footer;