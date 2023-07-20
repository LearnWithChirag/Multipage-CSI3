import React from "react";
import '../CSS/Instruction.css';
import Illustration from '../images/Illustration.jpg';
import Illustration_2 from '../images/Illustration_2.jpg';

const Instruction = () =>{
    return(
        <>
        <div class="instructionContainer-1">
      <div class="instContent">
        <h1>Kalite ve Surec Yonetimi</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis alias
          dolore beatae enim nihil placeat, nam nulla esse tempora vero aut
          delectus nesciunt cum labore aspernatur officia maiores animi sequi
          fugit! Corporis sint nemo suscipit!
        </p>
        <input type="button" value="Kesfet" />
      </div>
      <div class="instImage">
        <img src={Illustration} alt="Illustration" srcset="" />
      </div>
    </div>

    <div class="instructionContainer-2">
      <div class="instImage">
        <img src={Illustration_2} alt="Illustration" srcset="" />
      </div>
      <div class="instContent">
        <h1>Test Yonetimi ve Analizi</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis alias
          dolore beatae enim nihil placeat, nam nulla esse tempora vero aut
          delectus nesciunt cum labore aspernatur officia maiores animi sequi
          fugit! Corporis sint nemo suscipit!
        </p>
        <input type="button" value="Kesfet" />
      </div>
    </div>
    </> 
    )
}

export default Instruction;