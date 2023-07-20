import React from "react";
import '../CSS/Footer.css';
import linkedin from '../images/LinkedinLogo.png';
import instagram from '../images/InstagramLogo.png';
import twitter from '../images/TwitterLogo.png';
import facebook from '../images/FacebookLogo.png';


const Footer =() =>{
    return(
        <div class="footer">
        <div class="subPoints">

            <ul><b>Cosum ve Hizmetler</b>
                <li>Yazim Gelistirme</li>
                <li>Outsourcing</li>
                <li>Kalite ve Surec Yonetimi</li>
                <li>Danismanlik</li>
                <li>Iot Destekli Cozumler</li>
            </ul>
            <ul><b>Urunler</b>
                <li>Yazim Gelistirme</li>
                <li>Outsourcing</li>
                <li>Kalite ve Surec Yonetimi</li>
                <li>Danismanlik</li>
            </ul>
            <ul><b>Kurumsal</b>
                <li>Yazim Gelistirme</li>
                <li>Outsourcing</li>
                <li>Kalite ve Surec Yonetimi</li>
            </ul>
            <ul><b>Iletisim</b>
                <li>Yazim Gelistirme</li>
                <li>Outsourcing</li>
            </ul>
        </div>
            <div class="links">
            <div class="copyright">
                &copy; Copyright 2001-2023 - Can Cevik
            </div>
            <div class="socialLinks">
              <img src={linkedin} alt="LinkedinLogo" />
              <img src={twitter} alt="TwitterLogo" />
              <img src={instagram} alt="InstagramLogo" />
              <img src={facebook} alt="FacebookLogo" />
            </div>
        </div>
    </div>
    )
}

export default Footer;