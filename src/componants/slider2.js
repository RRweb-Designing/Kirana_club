import React from 'react'
import Slider from "react-slick";
import kello from '../Assets/img/kello.png';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";






const Slider2 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };

  return (
   <div className='kirana-section'>
 
  
 
  

  <Slider {...settings} >  
       <div>  
        <div className='card-2'>                       
           <p>"Kirana Club has truly revolutionized the way we interact with Kirana stores. As an FMCG brand, the platform has given us unparalleled access to a vast network of Kiranas."</p>
            <div className='marketing'>
            <img src={kello} alt='img'/>
           <h4>Akashdeep Malhotra</h4>   
            <p>Marketing Head, Keyloggs</p> 
        </div>
    </div>
      </div>
      <div>
      <div className='card-2'>                       
            <p>"Kirana Club has truly revolutionized the way we interact with Kirana stores. As an FMCG brand, the platform has given us unparalleled access to a vast network of Kiranas."</p>
            <div className='marketing'>
           <img src={kello} alt='img'/>
          <h4>Akashdeep Malhotra</h4>   
         <p>Marketing Head, Keyloggs</p> 
         </div>
    </div>
      </div>
      <div>
       
      <div className='card-2'>                       
            <p>"Kirana Club has truly revolutionized the way we interact with Kirana stores. As an FMCG brand, the platform has given us unparalleled access to a vast network of Kiranas."</p>
            <div className='marketing'>
           <img src={kello} alt='img'/>
          <h4>Akashdeep Malhotra</h4>   
         <p>Marketing Head, Keyloggs</p> 
         </div>
    </div>
      </div>
      <div>  
    <div className='card-2'>                       
            <p>"Kirana Club has truly revolutionized the way we interact with Kirana stores. As an FMCG brand, the platform has given us unparalleled access to a vast network of Kiranas."</p>
            <div className='marketing'>
           <img src={kello} alt='img'/>
          <h4>Akashdeep Malhotra</h4>   
         <p>Marketing Head, Keyloggs</p> 
         </div>
    </div>
      </div>  
       <div>  
       <div className='card-2'>                       
            <p>"Kirana Club has truly revolutionized the way we interact with Kirana stores. As an FMCG brand, the platform has given us unparalleled access to a vast network of Kiranas."</p>
            <div className='marketing'>
           <img src={kello} alt='img'/>
          <h4>Akashdeep Malhotra</h4>   
         <p>Marketing Head, Keyloggs</p> 
         </div>
    </div>
      </div>  
       <div>
      <div className='card-2'>                       
            <p>"Kirana Club has truly revolutionized the way we interact with Kirana stores. As an FMCG brand, the platform has given us unparalleled access to a vast network of Kiranas."</p>
            <div className='marketing'>
           <img src={kello} alt='img'/>
          <h4>Akashdeep Malhotra</h4>   
         <p>Marketing Head, Keyloggs</p> 
         </div>
    </div>  
    
        </div>  
     </Slider>
  
 </div>
  
  )
}

export default Slider2;