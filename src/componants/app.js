
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './home';
import Nav from './navbar';
import Baner from './baner'
import Adds from './adds'
import Rate from './rate'
import CarouselSlider from './slider'
import Closer  from './closer';
import Slider2 from './slider2'
import Club from './club'
import About from './about'
import Footer from './footer'







function App() {
    

  
  
    return (
       <>
   
       <BrowserRouter>
       
    
<Nav/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/Baner" element={<Baner/>}/>
      <Route path="/Adds" element={<Adds/>}/>
      <Route path="/Rate" element={<Rate/>}/>
      <Route path="/CarouselSlider" element={<CarouselSlider/>}/>
      <Route path="/Closer" element={<Closer/>}/>
      <Route path="/Slider2" element={<Slider2/>}/>
      <Route path="/Club" element={<Club/>}/>
      <Route path="/About" element={<About/>}/>
     
      
    
  
     
      </Routes>

      </BrowserRouter>
     
        
    <Footer/>
   

        
          </>
       
       
     );
   };
   
   export default App;