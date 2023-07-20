import React from "react";
import '../CSS/Banner.css';
import DoubleRight from '../images/DoubleRight.png';

const Banner = () =>{
    return(
        <div class="banner">
      <div class="empty">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p class="subHeading">Lorem, ipsum dolor.</p>
        <div class="bannerContent">
          <p>Lorem, ipsum dolor.</p>
          <img src={DoubleRight} alt="DoubleRight" srcset="" />
          <p>Lorem, ipsum dolor.</p>
          <img src={DoubleRight} alt="DoubleRight" srcset="" />          
        <p>Lorem, ipsum dolor.</p>
        <img src={DoubleRight} alt="DoubleRight" srcset="" />
        <p>Lorem ipsum dolor.</p>
      </div>
    </div>
    </div>
    )
}

export default Banner;