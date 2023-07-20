import React from "react";
import '../CSS/GetInTouch.css';
import multi from '../images/multiPerson.png';

const GetInTouch = () =>{
    return(
        <div class="getInTouch">
        <img src={multi} alt="multiPerson" srcset="" />
        <h1>Bize Ulasin</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aliquam quae corrupti, saepe iusto dignissimos?</p>
        <input type="button" value="Bize Ulasin" />
    </div>
    )
}

export default GetInTouch;