import React from "react";

 import { SiGooglemeet } from 'react-icons/si';
 import { RiNewspaperLine } from 'react-icons/ri';
 import { FaGraduationCap} from 'react-icons/fa';




const Services =()=>{
    
return <section id="features" class="features section">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="section-title">
                <h3 class="wow zoomIn" data-wow-delay=".2s">Features</h3>
                <h2 class="wow fadeInUp" data-wow-delay=".4s">Tools That Helps You Get Hired.
                </h2>
               
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
            <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
            
                <i class="lni lni-cloud-upload">
                <SiGooglemeet
                        size={35}
                        className='iconStyle'
                    />
                 
                   
                </i>
                <h3>Mock Interview</h3>
                <p>
                Book an interviews with experts from your dream 
                companies and experience the real interview on a single call
                </p>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
            <div class="single-feature wow fadeInUp" data-wow-delay=".4s">
                <i class="lni lni-lock">
                    <RiNewspaperLine
                        size={35}
                        className='iconStyle'
                    />
                </i>
                <h3>CV Review</h3>
                <p>
                Feeling insecure about your cv just book your slot and get your CV reviewed by our experts on a call.

                </p>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
            <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                <i class="lni lni-reload">
                <FaGraduationCap
                        size={35}
                        className='iconStyle'
                />
                </i>
                <h3>Mentoring</h3>
                <p>Schedule your 1:1 mentoring session with our experts 
                from your dream companies on a single call.</p>
            </div>
        </div>
        
    </div>
</div>
</section>
}
export default Services;