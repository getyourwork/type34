import React from "react";
import imgAb from "../../Assets/about.png";

const About=()=>{

    return <section id="about" class="about">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Who we are ?</h2>
      </div>

      <div class="row">
        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
          <img src={imgAb} class="img-fluid" alt=""/>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content " data-aos="fade-right" data-aos-delay="100">
          <p className="text123">
            Starting from a college hostel room, thinking of building a company that can create a positive impact in life of millions we created Queleap.
              <br/><br/>We have gone through all the struggles in our professional career that you are facing now. From lab experiments and viva 
              to late submission of assignments to giving semester exams.
            <br/><br/>
              Major problem that we face during our professional career is the lack of mentoring and support at right time.
              Getting mentored from the start of your professional career can create a major impact on your future jobs.
              <br/><br/>We at Queleap helps you find a qualified professional from the Industry to guide you towards your dream job and more opportunities, preparing you for your interviews.
          </p>
        </div>
      </div>

    </div>
  </section>

};

export default About;