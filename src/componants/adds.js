import React from "react";
import '../Assets/css/style.css';
import Add_img1 from '../Assets/img/dawat.png';
import Add_img2 from '../Assets/img/madhvik.png';
import Add_img3 from '../Assets/img/tvs.png';
import Add_img4 from '../Assets/img/tvs.png';
import Add_img5 from '../Assets/img/unibic.png';





function Adds()
{
    return(
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

    );
}


export default Adds;