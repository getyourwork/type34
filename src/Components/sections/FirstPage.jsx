import React from "react";
import img12 from "../../Assets/First.png"
const FirstPage=()=>{
    return <section id="home" className="hero-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="hero-content">
                        <h1 className="wow fadeInLeft" data-wow-delay=".4s">Struggling to get your dream job ?</h1>
                        <p className="name-desc fadeInLeft  " data-wow-delay=".6s">Trust Us!!! we can feel your struggle.
	                        we are here to help you...</p>
                        <div className="button wow fadeInLeft" data-wow-delay=".8s">
                            <a href="#MOck" className="btn">Mock Interview</a>
                            {/* <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                                class="glightbox video-button"><span class="video"><i
                                        class="lni lni-play"></i></span><span class="text">Watch Intro</span></a> */}
                                        <a href="#CVr" className="btn">CV Interview</a>

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