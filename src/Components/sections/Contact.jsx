import react from 'react';

const Contact=()=>{
 
    return  <div  id="contact" className='contact1'>
    <div class="contact-wrap"> 
        <div class=" contactu">
            <h3 className='title' style={{color:'white'}}>Submit your CV</h3>
            <p style={{marginTop:"20px"}}>
                To have an effective session with our experts kindly submit your cv here as an attachment. 
            </p>
            <p style={{marginTop:"40px"}}>
                <div className='button wow fadeinleft' >
                <a class="btn" href="mailto:admin@queleap.com" target="_blank" rel="noreferrer">
                    submit
                </a>
                    </div>
            </p>
        </div>
    </div>
    
</div>

};

export default Contact;