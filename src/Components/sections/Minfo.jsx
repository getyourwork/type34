import React from "react";
import { Link } from "react-router-dom";
const Minfo=()=>{
    return     <section class="section call-action" id="MEntor">
    <div className="container" >
        <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                <div className="cta-content" >
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">1 : 1 Mentoring
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                    {/* A perfect cv is your first way to impress the employer,get your cv reviewed by the industry professionals by booking your slot.  */}
                    Getting mentored by an industry expert from the start of your professional career can create a major impact on your future jobs 
                    </p>
                    <div className="button wow fadeInUp" data-wow-delay=".6s">
                       <Link to="/cvr">
                        <a  className="btn">Book now</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
}

export default Minfo;