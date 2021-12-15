import React from "react";
import "./Cvr.css";
import {InlineWidget} from 'react-calendly';

const divStyle={
    minWidth:"320px",
    height:"630px",
    scrolling:"no"
};




function Cvr(){
    
  
    return  <div class="container page-3 " >
    
    <div className="progress-posi" >
    <div class="progress-container">
    <div class="progress" id="progress"></div>
    <div class="circle active">1</div>
   <div class="circle ">2</div>
   <div class="circle ">3</div>
 
     </div>
  </div>
     
    <div className="rct1">
        <InlineWidget url="https://calendly.com/getyourwork/30min?hide_event_type_details=1&hide_gdpr_banner=1"
        style={divStyle } className="rct1"
         />
      </div>
    
{/* <div class="calendly-inline-widget" data-url="https://calendly.com/getyourwork/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
style={divStyle }

></div> */}
{/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}

    <div className="btn90">

      
    <button id="prev" className="btn45" disabled>Preview</button>
    <button id="next" className="btn45">Next</button>
    </div>
 </div>
};
export default Cvr; 