
import React from "react";
import '../Assets/css/style.css';
import Add_img1 from '../Assets/img/dawat.png';
import Add_img2 from '../Assets/img/madhvik.png';
import Add_img3 from '../Assets/img/tvs.png';
import Add_img4 from '../Assets/img/tvs.png';
import Add_img5 from '../Assets/img/unibic.png';


import x from '../Assets/img/x_.98cc0d1ae02d333bdfedbde57638331a.svg';
import linkedin from '../Assets/img/in.2f55c54d69b75f530e1ae9e0b66e05de.svg';


import closer_img1 from '../Assets/img/closer_img1.png';
import closer_img2 from '../Assets/img/closer_img2.png';
import closer_img3 from '../Assets/img/closer_img3.png';

import right from '../Assets/img/right.svg';

import '../Assets/css/style.css';
import Rate_img1 from '../Assets/img/rate_img1.png';
import Rate_img2 from '../Assets/img/rate_img2.png';
import Rate_img3 from '../Assets/img/rate_img3.png';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import announce from '../Assets/img/announce.3908203a60f746f56165.png'
import display from '../Assets/img/display.png';
import listen from '../Assets/img/listen.png';
import survey from '../Assets/img/survey.png';
import contest from '../Assets/img/contest.png';
import connect from '../Assets/img/connect.png';
import Arrow from './Arrow';




import Slider from "react-slick";
import kello from '../Assets/img/kello.png';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

import 'animate.css';
function Home() {
    
    const responsive = {
  
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
    
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
    
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
    
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
    
    
        }
      };

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
       <>

       
  <div className="baner">
        <div className="baner_contant animate__animated animate__backInLeft">
            <h1 >Get the power to influence 15,00,000+ kiranas of India</h1>
            <p>Kirana Club is India's largest kirana community and your only media channel to win kirana mindshare</p>
            <button className="btn ">Schedule a Demo</button>
        </div>



        <div className="baner_img animate__animated animate__backIn">
        </div>
    </div>

    <div className="Adds">
            <div className="Add_hedimg">
            <h1>Top brands are partnering with Kirana Club to digitally influence the GT channel</h1>
            </div>
            <div className="Add_img">
            <img src={Add_img4} alt=""></img>
            <img src={Add_img5} alt=""></img>
                <img src={Add_img1} alt=""></img>
                <img src={Add_img2} alt=""></img>
                <img src={Add_img3} alt=""></img>
                
            
            </div>
           
        </div>
        <div className="rate">
    <div className="rate_heading">
        <h1>Kirana Club is able to deliver impact on the back of scale it has achieved</h1>
    </div>
    <div className="rate_img">
        <img src={Rate_img1} alt=""></img>
        <img src={Rate_img2} alt=""></img>
        <img src={Rate_img3} alt=""></img>
    </div>
</div>

<div className='slider-section'>
        <div className='heading-section'>
          
            <h1>Here’s how brands are using Kirana Club platform to influence the minds of kiranas, at scale</h1>
          
        </div>
        <div className='flexible-item'>
  
          <Carousel responsive={responsive} arrows={false}
  
            renderButtonGroupOutside={true}
            customButtonGroup={<Arrow />}
          >
  
            <div className='card'>
              <img src={announce} />
              <h2>Kirana Influencer</h2>
              <p>Tap into some of the most influential kirana owners of the community to drive preference and word-of-mouth for your brand.</p>
            </div>
  
            <div className='card'>
              <img src={display} />
              <h2>Kirana Display</h2>
              <p>Run the good old display banner compaigns with reach-frequency or lead-generation objectives.</p>
            </div>
  
            <div className='card'>
              <img src={listen} />
              <h2>Kirana Listening</h2>
              <p>Get the pulse of the kirana sentiments for your brand by analyzing every conversation about your brand in the kirana commu.</p>
            </div>
  
            <div className='card'>
              <img src={survey} />
              <h2>Kirana Survey</h2>
              <p>By running polls for varied objectives, get qualitative and quantitative insights on your brand or category.</p>
  
            </div>
            <div className='card'>
              <img src={contest} />
              <h2>Kirana Contests</h2>
              <p>Run grantification-based in-store display contests that instantly deliver an uptick in distribution and share of shelf gains.</p>
            </div>
            <div className='card'>
              <img src={connect} />
              <h2>Kirana Connect</h2>
              <p>Have LIVE video chats with kirana owners from across the country to get feedback, gauge sentiments and make new announcements.</p>
            </div>
  
          </Carousel>
        </div>
  
        <div className='flexible_item2'>
          <div className='card'>
            <img src={announce} />
            <h2>Kirana Influencer</h2>
            <p>Tap into some of the most influential kirana owners of the community to drive preference and word-of-mouth for your brand.</p>
          </div>
  
          <div className='card'>
            <img src={display} />
            <h2>Kirana Display</h2>
            <p>Run the good old display banner compaigns with reach-frequency or lead-generation objectives.</p>
          </div>
  
          <div className='card'>
            <img src={listen} />
            <h2>Kirana Listening</h2>
            <p>Get the pulse of the kirana sentiments for your brand by analyzing every conversation about your brand in the kirana commu.</p>
          </div>
  
          <div className='card'>
            <img src={survey} />
            <h2>Kirana Survey</h2>
            <p>By running polls for varied objectives, get qualitative and quantitative insights on your brand or category.</p>
  
          </div>
          <div className='card'>
            <img src={contest} />
            <h2>Kirana Contests</h2>
            <p>Run grantification-based in-store display contests that instantly deliver an uptick in distribution and share of shelf gains.</p>
          </div>
          <div className='card'>
            <img src={connect} />
            <h2>Kirana Connect</h2>
            <p>Have LIVE video chats with kirana owners from across the country to get feedback, gauge sentiments and make new announcements.</p>
          </div>
        </div>
  
  
  
  
  
  
        <div className='btn-sec'>
          <button className='btn'>Schedule a Demo</button>
        </div>
      </div>

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
       
       
     );
   };
   
   export default Home;