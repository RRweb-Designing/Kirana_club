import React from 'react';
import '../Assets/css/style.css';
import logo from '../Assets/img/logo.png';





function Nav()
{
    
    return(
<nav className='nav'>

    <div className='logo'> 
        <img src={logo} alt='logo'></img>
</div>
<div className='links'>
    <ul>
        <li>
            <a href='#' className='active'>Home</a>
        </li>

        <li>
            <a href='#'>About Us </a>
        </li>

        <li>
            <a href='#'>For Brands</a>
        </li>
        <li>
            <a href='#'>Resources</a>
        </li>
       
</ul>
</div>


    <button className='btn'>Schedule a Demo</button>
    <i class="fa-solid fa-bars"></i>
    
</nav>
    );
    
}

export default Nav;
