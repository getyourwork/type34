import react from 'react';
import brand1 from '../../Assets/clients/client-1.png';
import brand2 from '../../Assets/clients/client-2.png';
import brand3 from '../../Assets/clients/client-3.png';
import brand4 from '../../Assets/clients/client-4.png';
import brand5 from '../../Assets/clients/client-5.png';
import brand6 from '../../Assets/clients/client-6.png';



const Brands =()=>{

    return <section id="clients" class="clients">
     <div class="container" data-aos="zoom-in">
    <h4> Sessions with experienced professionals from</h4>
    <div className='row'>
   {/*   <div class="clients-slider swiper row">
        <div class="swiper-wrapper align-items-center">
          <div class="swiper-slide col-lg-2 col-md-4 col-sm-4"><img src={brand1} class="" alt=""/></div>
          <div class="swiper-slide col-lg-2 col-md-4 col-sm-4"><img src={brand2} class="" alt=""/></div> */}


{/*           
          <div class="swiper-slide col-lg-2 col-md-4 col-sm-4"><img src={brand3} class="" alt=""/></div>
          <div class="swiper-slide col-lg-2 col-md-4 col-sm-4"><img src={brand4} class="" alt=""/></div>
          <div class="swiper-slide col-lg-2 col-md-4 col-sm-4"><img src={brand5} class="" alt=""/></div>
          <div class="swiper-slide col-lg-2 col-md-4 col-sm-4"><img src={brand6} class="" alt=""/></div>
           */}

          {/* <div class="swiper-slide"><img src="assets/img/clients/client-7.png" class="img-fluid" alt=""/></div>
          <div class="swiper-slide"><img src="assets/img/clients/client-8.png" class="img-fluid" alt=""/></div>
        */}
        {/* </div>
        </div>*/}
        <div class="col-lg-3 col-md-4 col-sm-4">
            <img src={brand1} className='brand-logo1' alt=''/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-4">
            <img src={brand2} className='brand-logo1' alt=''/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-4">
            <img src={brand3} className='brand-logo1' alt=''/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-4">
            <img src={brand4} className='brand-logo1' alt=''/>
        </div>
        {/* <div class="col-lg-2 col-md-4 col-sm-4">
            <img src={brand5} className='brand-logo1' alt=''/>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-4">
            <img src={brand6} className='brand-logo1' alt=''/>
        </div> */}
      </div>

    </div> 


  </section>

};



export default Brands;