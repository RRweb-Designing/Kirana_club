import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './componants/navbar';
import Baner from './componants/baner';
import Adds from './componants/adds';
import Rate from './componants/rate';
import CarouselSlider from './componants/slider';
import Closer from './componants/closer';
import Slider2 from './componants/slider2';
import About from './componants/about';
import Footer from './componants/footer';
import Club from './componants/club';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Baner/>
    <Adds/>
    <Rate/>
    <CarouselSlider/>
    <Closer/>
    <Slider2/>
    <Club/>
    <About/>
    <Footer/>
   
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

