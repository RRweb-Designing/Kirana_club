import React from 'react';
import right from '../Assets/img/right.svg';



const Club = () => {
  return (
    <div className='clud-section'> 



       <div className='club-heading'>
        <h2>Join 1000+ FMCG professionals getting the latest insights through the Kirana Club Insider</h2>
       </div>


<div className='inside_section'>
  
       <div className='inside_img'>
       </div>


        <div className='inside_text'>
            <img src={right}  alt='img'/> 
             <p>One report per month in your inbox</p>
             <img src={right} alt='img'/> 
           <p>5-Minute reads packed with quality insights</p>
             <img src={right} alt='img' /> 
            <p>Detailed deep dive into all things retail & FMCG</p>
             <img src={right}alt='img'/>
             <p>Free Forever, Zero Spam</p> 
             <input className='input' type='text' placeholder='Enter Your E-mail.....'/>
             <button className='subscribe'>Subscribe</button>
        </div>
        
        </div>
       
       </div>
    
    
  )
}

export default Club;