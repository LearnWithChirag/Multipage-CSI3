import React from "react";
import '../CSS/CardContainer.css';
import file from '../images/file.png';
import star from '../images/star.png';
import crown from '../images/crown.png';
import bar from '../images/bar.png';
import pie from '../images/pie.png';
import figma from '../images/figma.png';


const CardContainer = () =>{
    return(
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
    )
}

export default CardContainer;