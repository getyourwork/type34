import React from 'react';


const Footer=()=>{
return <footer className="footer" id="Footer123">
    <div className='hireSection'>
    <div class="contact-wrap"> 
        <div class=" contactu">
            <p
            //  style={{marginTop:"20px"}}
            >
            <b>We are looking for experienced and passionate Mentors.</b>
            </p>

            <p>
            Drop your updated resume <a href='mailto:admin@queleap.com' style={{color:'white'}}>admin@queleap.com</a>
            </p>
            <p 
            // style={{marginTop:"40px"}}
            >
                
            </p>
        </div>
    </div>

    </div>
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
                        <p>Leap from the Que</p>
                      
                        
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#pricing"> Mock interview</a></li>
                                    <li><a href="#pricing">CV reviewing</a></li>
                                    <li><a href="#pricing">Last minute hack</a></li>
                                    <li><a href="#pricing">Career booster</a></li>
                                    <li><a href="#pricing">Project booster</a></li>
                                 
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Follow us</h3>
                                <ul>
                                    
                                    <li><a  href="https://twitter.com/thequeleap">Twitter</a></li>
                                    <li><a href="https://www.linkedin.com/company/queleap">linkedin</a></li>
                                    <li><a  href="https://www.instagram.com/que_leap/">Instagram</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="#about">About us</a></li>
                                    <li>
                                    <a href="#popup1">Refund policy</a>
                                    <div id="popup1" class="overlay">
                                            <div class="popup">
                                                <h2>Refund Case</h2>
                                                <a class="close" href="#Footer123">&times;</a>
                                                    <div class="content">
                                                    

                                                    <p>If the Meeting Host has failed to attend the meeting on the schedulded
                                                     date you can request for a refund. You can drop refund query at </p>
                                                     
                                                     <a className='r-email' href='admin@queleap.com'> admin@queleap.com</a>
                                                     <br/>
                                                     <br/>
                                                     <p> Refund can take upto 5-7 working days.</p>
                                                       
                                                        <br/>
                                                        
                                                              <h5> Cancellation case</h5> 
                                                        
                                                              <p>  We do not support cancellation of scheduled 
                                                              sessions with our professionals.</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </li>
                                        

                                    <li><a href="#contact">Contact us</a></li>
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
    <div class="copyright">
        &copy; 2021 <strong>Queleap</strong> All Rights Reserved
      </div>
</footer>
};

export default Footer;