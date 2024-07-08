import React from "react";
import '../Assets/css/style.css';
import Rate_img1 from '../Assets/img/rate_img1.png';
import Rate_img2 from '../Assets/img/rate_img2.png';
import Rate_img3 from '../Assets/img/rate_img3.png';

function Rate()
{
    return(
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
    );
}

export default Rate;