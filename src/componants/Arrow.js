import React from 'react'
import left from '../Assets/img/left.svg';
import right from '../Assets/img/right_arrow.svg';
// import './Arrow.css'



const Arrow = ({ next, previous, goToSlide, ...rest }) => {
    
  return (
    <div className='arrowbtns'>
          <img src={left} onClick={() => previous()}/>
          <img src={right} onClick={() => next()}/>
   </div>
  )
}

export default Arrow;