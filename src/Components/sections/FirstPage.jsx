import React from "react";
import img12 from "../../Assets/First.png"
const FirstPage=()=>{
    return <section id="home" className="hero-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="hero-content">
                        <h1 className="wow " data-aos="fade-right">Ready to leap from the Que??</h1>
                        <p className="name-desc" data-aos="fade-right" data-aos-duration="2500">Book a session of your choice and leap from the que</p>
                        <div className="button wow " data-aos="fade-right" data-aos-duration="2500">
                            <a href="#pricing" className="btn">Book your slot</a>
                            <a href="https://t.me/queleap" className="btn btn-dark">Join our community</a>
                            {/* <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                                class="glightbox video-button"><span class="video"><i
                                        class="lni lni-play"></i></span><span class="text">Watch Intro</span></a> */}
                                       

                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-12">
                    <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                        <img src={img12} className="header-img" alt="#"/> 
                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default FirstPage
