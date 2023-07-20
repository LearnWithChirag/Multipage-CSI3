import React from "react";
import '../CSS/Container.css';
import '../CSS/CardContainer.css';
import file from '../images/file.png';
import star from '../images/star.png';
import crown from '../images/crown.png';
import bar from '../images/bar.png';
import pie from '../images/pie.png';
import figma from '../images/figma.png';

const Container = () =>{
    return(
      <>
        <div class="container">
      <h1>Kalite ve Surec Yonetimi</h1>
      <p>
        Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farkli
        sektörlerde tecrübe kazanmiş uzman kadrolarimizla Proje Yönetimi, İş
        Analizi ve Test Yönetimi hizmetleri sunmaktayiz.
      </p>
    </div>

    <div class="cardContainer">
            <div class="card">
                <img src={file} alt="file" srcset="" />
                <h1>Document</h1>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
                iusto?
                </p>
            </div>
            <div class="card">
                <img src={star} alt="star" srcset="" />
                <h1>Star</h1>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
                iusto?
                </p>
            </div>
      <div class="card">
        <img src={crown} alt="crown" srcset="" />
        <h1>Crown</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          iusto?
        </p>
      </div>
      <div class="card">
        <img src={bar} alt="bar" srcset="" />
        <h1>Bar Chart</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          iusto?
        </p>
      </div>
      <div class="card">
        <img src={pie} alt="pie" srcset="" />
        <h1>Pie Chart</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          iusto?
        </p>
      </div>
      <div class="card">
        <img src={figma} alt="figma" srcset="" />
        <h1>Info</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          iusto?
        </p>
      </div>
    </div>
    </>
    )
}

export default Container;