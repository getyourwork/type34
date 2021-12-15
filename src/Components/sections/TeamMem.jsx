import React from "react";
import './TeamMem.css';
import{IoLogoLinkedin,IoLogoTwitter} from 'react-icons/io'
import  img from'./team2.jpg';

const TeamMem=()=>{
 return <div class="container">
 <h2 class="wow fadeInUp center1" data-wow-delay=".4s" style={{paddingBottom:'5%'}}>Our Team
                </h2>
<div class="row mb-5" id="TEam">
  <div class="col-md-12 col-lg-4 col-sm-12">
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Eliza Zach</h5>
        <p class="card-text text-center">Chief Executive Officer</p>
        <div class="social">
          <a href="javascript:void(0)"
            >
            <IoLogoTwitter
            size={25} 
            className='teamIcons'

            />
          </a>

          <a href="javascript:void(0)"
            >
            <IoLogoLinkedin
            size={25}
            className='teamIcons'
             />

            </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-12 col-lg-4 col-sm-12">
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Eliza Zach</h5>
        <p class="card-text text-center">Chief Executive Officer</p>
        <div class="social">
          <a href="javascript:void(0)"
            >
          <IoLogoTwitter
            size={25} 
            className='teamIcons'

            />
            </a>

          <a href="javascript:void(0)"
            >
            <IoLogoLinkedin
            size={25}
            className='teamIcons'
             />
             </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-12 col-lg-4 col-sm-12">
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Eliza Zach</h5>
        <p class="card-text text-center">Chief Executive Officer</p>
        <div class="social">
          <a href="javascript:void(0)"
            >
              <IoLogoTwitter
            size={25} 
            className='teamIcons'

            /></a>

          <a href="javascript:void(0)"
            >
              <IoLogoLinkedin
            size={25}
            className='teamIcons'
             />
            </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row mb-5">
  <div class="col-md-12 col-lg-4 col-sm-12">
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Eliza Zach</h5>
        <p class="card-text text-center">Chief Executive Officer</p>
        <div class="social">
          <a href="javascript:void(0)"
            >
                     <IoLogoTwitter
            size={25} 
            className='teamIcons'

            />
            </a>

          <a href="javascript:void(0)"
            >
              <IoLogoLinkedin
            size={25}
            className='teamIcons'
             />
            </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-12 col-lg-4 col-sm-12">
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Eliza Zach</h5>
        <p class="card-text text-center">Chief Executive Officer</p>
        <div class="social">
          <a href="javascript:void(0)"
            >
           <IoLogoTwitter
            size={25} 
            className='teamIcons'

            />
            </a>

          <a href="javascript:void(0)"
            >
            <IoLogoLinkedin
            size={25}
            className='teamIcons'
             />
             </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-12 col-lg-4 col-sm-12">
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Eliza Zach</h5>
        <p class="card-text text-center">Chief Executive Officer</p>
        <div class="social">
          <a href="javascript:void(0)"
            >            <IoLogoTwitter
            size={25} 
            className='teamIcons'

            />
            </a>

          <a href="javascript:void(0)"
            >
              <IoLogoLinkedin
            size={25}
            className='teamIcons'
             />
            </a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <div class="row mb-5">
  <div class="col-md-12 col-lg-4 col-sm-12">
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Eliza Zach</h5>
        <p class="card-text text-center">Chief Executive Officer</p>
        <div class="social">
          <a href="javascript:void(0)"
            ><i class="lni lni-twitter-original"/></a>

          <a href="javascript:void(0)"
            ><i class="lni lni-linkedin-original"/></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-12 col-lg-4 col-sm-12">
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Eliza Zach</h5>
        <p class="card-text text-center">Chief Executive Officer</p>
        <div class="social">
          <a href="javascript:void(0)"
            ><i class="lni lni-twitter-original"/></a>

          <a href="javascript:void(0)"
            ><i class="lni lni-linkedin-original"/></a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-12 col-lg-4 col-sm-12">
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Eliza Zach</h5>
        <p class="card-text text-center">Chief Executive Officer</p>
        <div class="social">
          <a href="ad"
            ><i class="lni lni-twitter-original"/></a>

          <a href="ads"
            ><i class="lni lni-linkedin-original"/></a>
        </div>
      </div>
    </div>
  </div> */}


</div>
}

export default TeamMem;