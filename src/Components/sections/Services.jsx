import React from "react";

 import { GiVideoConference } from 'react-icons/gi';
 import { IoMdChatbubbles } from 'react-icons/io';
 import { FiPhoneCall} from 'react-icons/fi';




const Services =()=>{
    
return <section id="features" class="features section">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="section-title">
                <h3 class="wow zoomIn" data-wow-delay=".2s">Appointment</h3>
                <h2 class="wow fadeInUp" data-wow-delay=".4s">How it works ?
                </h2>
               
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
            <div class="single-feature wow fadeInUp" data-wow-delay=".2s">
            
                <i class="lni lni-cloud-upload">
                <FiPhoneCall
                        size={35}
                        className='iconStyle'
                    />
                 
                   
                </i>
                <h3>Drop a hi</h3>
                <p>
                Pick your phone and Drop a hi to know more about our services.
                </p>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
            <div class="single-feature wow fadeInUp" data-wow-delay=".4s">
                <i class="lni lni-lock">
                    <IoMdChatbubbles
                        size={35}
                        className='iconStyle'
                    />
                </i>
                <h3>Talk with our team</h3>
                <p>
                Our team will collect your required details for starting your session.
                </p>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
            <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                <i class="lni lni-reload">
                <GiVideoConference
                        size={40}
                        className='iconStyle'
                />
                </i>
                <h3>Start your session</h3>
                <p>
                Submit your required details and start your session
                </p>
            </div>
        </div>
        
    </div>
</div>
</section>
}
export default Services;