import React from 'react'
import closer_img1 from '../Assets/img/closer_img1.png';
import closer_img2 from '../Assets/img/closer_img2.png';
import closer_img3 from '../Assets/img/closer_img3.png';
 
const Closer = () => {
  return ( 
    <div className=' closer-section'>  
    <div className='closer-section_heading'>
  
        <h1>Take a closer look at the impact<br></br> Kirana Club can deliver.</h1>
        <p>View all  <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
        
        </div>
       <div className='closer-section_img'> 
        <div className='card-1'>       
            <img src={closer_img1}/>            
            <p>How a South strong incense stick brand built kirana preference in the non-South states</p>
            <button>Read Case Study</button>           
        </div>
        <div className='card-1'>
            <img src={closer_img2}/>      
            <p>How a pasta brand made a mark in the kirana channel which otherwise preferred selling loose pasta</p>
            <button>Read Case Study</button>
        </div>
        <div className='card-1'>
            <img src={closer_img3}/>
            <p>How Kirana Club enabled a leading oats brand gain increased share of shelf in three metro markets</p>
            <button>Read Case Study</button>
        </div>      
       </div> 
    </div>
    
  
  )
}

export default Closer;