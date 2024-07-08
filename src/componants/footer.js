import React from 'react';
import logo from '../Assets/img/footerimg.png'
import linkedin1 from '../Assets/img/in1.bad32ec7efb8e3590babb29c5aa332fe.svg';
import youtube from '../Assets/img/youtube.acd4bfaa951e8570ed145b2b1dc8413a.svg';
import x1 from '../Assets/img/X1.381eecc2703e117c23c692b3e6a72532.svg'
const Footer = () => {
  return (
    <div className='footer-section'> 

    <div className='kirana-club'>
      <div className='logo'>
      <img src={logo} />
      <div className='para'> 
       <p>Copyright © Kirana Club</p>
      </div>
      </div>

     <ul>
       <li>Home</li>
       <li>About Us</li>
       <li>Case Studies</li>
       </ul>
       <ul>
       <li>Carrers</li>
       <li>For Brands</li>
       <li>In The News</li>
       </ul>
       <ul> 
       <li>Kirana Club Insider</li>
       <li>Kirana Conversations Tracker</li>
      </ul>
     
<div className='image-flex'>
<img src={ linkedin1} />
<img src={youtube} />
<img src={x1} />  
</div>
    </div>
   </div>

  )
}

export default Footer;