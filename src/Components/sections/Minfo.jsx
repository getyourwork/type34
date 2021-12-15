import React from "react";
import { Link } from "react-router-dom";
const Minfo=()=>{
    return     <section class="section call-action" id="MEntor">
    <div className="container" >
        <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                <div className="cta-content" >
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">MENTORING
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                    {/* A perfect cv is your first way to impress the employer,get your cv reviewed by the industry professionals by booking your slot.  */}
                    Getting mentored by an industry expert from the start of your professional career can create a major imapact on your future jobs.

These 1:1 Mentoring sessions by industry experts can help you identify more about the current trending technlogies and future scope of a certain technology.

	Schedule your 1:1 mentoring session with our experts from your dream companies on a single call.
                    </p>
                    <div className="button wow fadeInUp" data-wow-delay=".6s">
                       <Link to="/cvr">
                        <a  className="btn">Book Now</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
}

export default Minfo;