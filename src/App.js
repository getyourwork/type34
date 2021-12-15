import React from "react";
import { Route,BrowserRouter as Router , Routes } from "react-router-dom";
import Mock from './Pages/Mock/Mock';
import Cvr from './Pages/Cvr/Cvr';
import Home from "./Home/Home";
import Contact from './Pages/Contact/Contact';
import About from'./Pages/About/About';
// import Cvr from "./Pages/Cvr";
// import Mock from "./Pages/Mock";
// import Details from "./Pages/Details";


const App=()=> {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/mock' element={<Mock/>}/>
          <Route path='/cvr' element={<Cvr/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          
      </Routes>
    

    </Router>

    </div>
  );
}

export default App;
