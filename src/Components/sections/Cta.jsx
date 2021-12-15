import React from "react";
import {Link} from 'react-router-dom';

const Cta=()=>{
return <section class="section call-action" id="CVr">
<div className="container" >
    <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
            <div className="cta-content" >
                <h2 className="wow fadeInUp" data-wow-delay=".2s">CV REVIEWING
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                {/* A perfect cv is your first way to impress the employer,get your cv reviewed by the industry professionals by booking your slot.  */}
                "A perfect CV can decide your career" Do you agree?
	Your answer would be Yes!!! 
	An Ordered and Properly reviewed CV can help you get your dream job.
	Our experts from the field of IT and HR can help you in creating your perfect CV.
	Why wait? Book your slot and get your CV reviewed by our experts on a call.
                </p>
                <div className="button wow fadeInUp" data-wow-delay=".6s">
                   <Link to="/cvr">
                    <a className="btn">Book Now</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
};

export default Cta;