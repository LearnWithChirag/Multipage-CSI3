import React from "react";
import '../CSS/Company.css';
import borusan from '../images/borusan.png';
import istanbul from '../images/istanbul.png';
import bookmyshow from '../images/bookmyshow.png';
import akbank from '../images/akbank.png';
import akcansa from '../images/akcanSA.png';
import tumunu from '../images/tumunu.png';
import aktas from '../images/aktas.png';
import ola from '../images/ola.png';
import amazon from '../images/amazon.png';  

const Company = () =>{
    return(
        <div class="companyContainer">
      <h1>Referanslarimiz</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div class="logo">
        <span class="row">
          <img class="logo1" src={borusan} alt="borusanLogo" />
        </span>
        <span class="row">
          <img class="logo3" src={istanbul} alt="istanbulLogo" />
          <img class="logo2" src={bookmyshow} alt="bookmyshowLogo"  />
        </span>
        <span class="row">
          <img class="logo4" src={akbank} alt="akbankLogo"  />
          <img class="logo5" src={akcansa} alt="akcanSALogo"  />
          <img class="logo6" src={tumunu} alt="akcanSALogo"  />
        </span>
        <span class="row">
          <img class="logo7" src={aktas} alt="aktasLogo"  />
          <img class="logo8" src={ola} alt="olaLogo"  />
        </span>
        <span class="row">
          <img class="logo9" src={amazon} alt="amazonLogo"  />
        </span>
      </div>
    </div>
    )
}

export default Company;