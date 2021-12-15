import React from "react";
import "./Mock.css";
import {InlineWidget} from 'react-calendly';

const divStyle={
    minWidth:"320px",
    height:"630px",
    scrolling:"no"
};




function ThirdPage(){
    
    // const circles = document.querySelectorAll('.circle');
    // const progress = document.querySelector('.progress');
    // const next = document.querySelector('#next');
    // const prev = document.querySelector('#prev');
    
    // let currentNumber = 1;
    
    // next.addEventListener('click', e => {
    //   currentNumber ++
    //   if(currentNumber > 4 ) {
    //     currentNumber = 4;
    //   }
    //   console.log(currentNumber);
    //   update();
    // })
    
    // prev.addEventListener('click', e => {
    //   currentNumber --
    //   if(currentNumber < 1 ) {
    //     currentNumber = 1;
    //   }
    //   console.log(currentNumber);
    //   update();
    // })
    
    // function update() {
    //   circles.forEach((circle, index) => {
    //     if(index < currentNumber) {
    //       circle.classList.add('active');
    //     } else {
    //       circle.classList.remove('active');
    //     }
    //   })
      
    //   const actives = document.querySelectorAll('.active');
    //   progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
      
    //   if(currentNumber === 1) {
    //     prev.disabled = true;
    //   } else if(currentNumber === 4) {
    //     next.disabled = true;
    //   } else {
    //     prev.disabled = false;
    //     next.disabled = false;
    //   }
    // }
    
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
      <div className="btn90">

      
      <button id="prev" className="btn45" disabled>Preview</button>
  <button id="next" className="btn45">Next</button>
  </div>
{/* <div class="calendly-inline-widget" data-url="https://calendly.com/getyourwork/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
style={divStyle }

></div> */}
{/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}

 </div>
};
export default ThirdPage; 