import React  from 'react';
import './Home.css';
import Navbar from '../Components/Navbar/Navbar';
import FirstPage from '../Components/sections/FirstPage';
import Services from '../Components/sections/Services';
import Minfo from '../Components/sections/Minfo';

import MockSec from '../Components/sections/MockSec';
import Cta from '../Components/sections/Cta';
import TeamMem from '../Components/sections/TeamMem';



import Footer from '../Components/sections/Footer';



function Home(){
return <div>

    <Navbar/>
    <FirstPage/>
    <Services/>
    <Minfo/> 
    <MockSec/>
    <Cta/>
    {/* <TeamMem/> */}
    <Footer/>
</div>

};

export default Home;