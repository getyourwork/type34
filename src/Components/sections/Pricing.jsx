import react from 'react';

const pricing=()=>{

    return  <section id="pricing" class="pricing-table section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title">
                    <h3 class="wow zoomIn" data-wow-delay=".2s">Services</h3>
                    <h2 class="wow fadeInUp" data-wow-delay=".4s">What We Provide</h2>
                    
                </div>
            </div>
        </div>

        <div class="row pricing-space">
            <div class="col-lg-4 col-md-6 col-12">
                <div class="single-table wow fadeInUp" data-wow-delay=".2s">
                    <div class="table-head">
                        <h4 class="title">CV Reviewing</h4>
                        <p>
                        A properly reviewed CV can help you get your dream job. Our experts from various field can help you in creating your perfect CV.   
                        </p>
                        <div class="price">
                            <h2 class="amount">₹399<span class="duration"></span></h2>
                        </div>
                        <div class="button">
                            <a href="javascript:void(0)" class="btn">Book Now</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
                <div class="single-table wow fadeInUp" data-wow-delay=".4s">
                    <div class="table-head">
                        <h4 class="title">
                        Mock Interview
                        </h4>
                        <p>
                        These expert sessions can help you understand more about your strongest and weakest areas in a particular field of interest.
                        </p>
                        <div class="price">
                            <h2 class="amount">₹399<span class="duration"></span></h2>
                        </div>
                        <div class="button">
                            <a href="javascript:void(0)" class="btn">Book Now</a>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
                <div class="single-table wow fadeInUp" data-wow-delay=".6s">
                    <div class="table-head">
                        <h4 class="title">1 : 1 Mentoring</h4>
                        <p>Getting mentored by an industry expert from the start of your professional career can create a major impact on your future jobs.</p>
                        <div class="price">
                            <h2 class="amount">₹399<span class="duration"></span></h2>
                        </div>
                        <div class="button">
                            <a href="javascript:void(0)" class="btn">Book Now</a>
                        </div>
                    </div>
                   
                </div>
            </div>
            
        </div>
        </div>
    
</section>
};


export default pricing;