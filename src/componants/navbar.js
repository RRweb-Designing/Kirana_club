import React from 'react';
import '../Assets/css/style.css';
import logo from '../Assets/img/logo.png';





function Nav()
{
    
    return(
<nav className='nav'>

    <div className='logo animate__animated animate__backInLeft'> 
        <img src={logo} alt='logo'></img>
</div>
<div className='links animate__animated animate__backInDown'>
    <ul>
        <li>
            <a href='/' className='active'>Home</a>
        </li>

        <li>
            <a href='/About'>About Us </a>
        </li>

        <li>
            <a href='/Rate'>For Brands</a>
        </li>
        <li>
            <a href='/'>Resources</a>
        </li>
       
</ul>
</div>


    <button className='btn animate__animated animate__backInRight'>Schedule a Demo</button>
    <i class="fa-solid fa-bars"></i>
    
</nav>
    );
    
}

export default Nav;
