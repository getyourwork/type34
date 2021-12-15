import React from 'react';
import {Link} from 'react-router-dom';
import img12 from "../../Assets/Second.png"


const MockSec=()=>{
    
  
    return  <div className="container page-3" id="MOck">
    <h2 className="wow fadeInUp center1" data-wow-delay=".4s">Mock Interview
                </h2>
    
     <div className="row second-section">
         <div className="col-sm-5 ">
             <div className="works12"> <img src={img12}/></div>
         </div>
         <div className="col-sm-7 sdf">
            
            <h5 className="about-desc">
            Tensed to attend your first interview ?
Our Mock Interview sessions from experts can help you understand the patterns and type of questions you are going to face in your real interviews.
These sessions can help you understand more about your strongest and weakest areas in a particular field of interest
                     </h5>
       </div>
     </div>
    <div className="first-clicker3-wrap">
       
        <div className="button wow fadeInUp" data-wow-delay=".6s">
                   <Link to="/mock">
                    <a  class="btn">Book Now</a>
                    </Link>
                </div>
        
    </div>
 </div>
};
export default MockSec; 