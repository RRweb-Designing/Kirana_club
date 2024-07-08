import React from 'react';
// import about from '../Assets/img/about.82c5fdac9ce51a46b84e.png';
import x from '../Assets/img/x_.98cc0d1ae02d333bdfedbde57638331a.svg';
import linkedin from '../Assets/img/in.2f55c54d69b75f530e1ae9e0b66e05de.svg';

const About = () => {
  return (
    <>
    <div className='about-section'> 
        <div className='about-img'>
       <div className='about-image'>
        </div>
    
       <h2>Anshul Gupta</h2>
       <p>Founder & CEO of kirana Club</p>
       <div className='icon'>
           <img src={x}  alt='img' />
           <img src={linkedin} alt='img' />
    </div>
       </div>
       <div className='about_text'>
        <p>While GT channel drives 80-90 percent of FMCG sales, brands are able to reach and influence only a small % of GT retailers directly. This can result in lost opportunities for brands to have more efficient distribution and deeper penetration.
   <br />
     Moreover, we have found that a kirana retailer trusts the information, ideas, tips and tricks of fellow kiranas more than the wholesalers or company sales representatives. 
<br />
      Using the above insight we have built the Kirana Club, wherein FMCG brands can partner with us to influence lakhs of kiranas directly riding on the power of community.  
<br />
 Over the last 2 years, some of the best national, regional and local brands have partnered with us and tasted success. </p>
        </div>        
   </div>


    <div className='discuss-section'>
  <div>
<h1>
Want to discuss your GT problem<br></br> statement with us?
</h1>
<button className='btn'>Schedule a Demo</button>
  </div>
   </div> 
    </>

    
   
 
  )
}

export default About