import React,{useEffect}  from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Home.css';
import Navbar from '../Components/Navbar/Navbar';
import FirstPage from '../Components/sections/FirstPage';
import Services from '../Components/sections/Services';
import About from '../Components/sections/About';
import Achievement from '../Components/sections/Achievement';
import Pricing from '../Components/sections/Pricing';



import Contact from '../Components/sections/Contact';
import Brands  from '../Components/sections/Brands';
// import TeamMem from '../Components/sections/TeamMem';



import Footer from '../Components/sections/Footer';



function Home(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
return <div>

    <Navbar/>
    <FirstPage/>
    <About/>
    <Brands/>
      

    
    <Services/>
    <Achievement/>  
    {/* <Cta/>
    <MockSec/>
    <Minfo/>  */}
    <Pricing/>
    {/* <TeamMem/> */}
    <Contact/>
    <Footer/>
</div>

};

export default Home;