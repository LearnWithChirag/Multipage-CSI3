import React from "react";
import '../CSS/Navbar.css';


const Navbar =() =>{
    return(
        <div class="navbar">
        <ul>
          <li> <a href="/"> Home </a></li>
          <li> <a href="/container"> Container </a></li>
          <li> <a href="/banner"> Banner </a></li>
          <li> <a href="/instruction"> Instruction </a></li>
          <li> <a href="/company"> Company </a></li>
          <li> <a href="/footer"> Footer </a></li>
          <li> <a href="/getInTouch"> Get In Touch </a></li>
      </ul>
    </div>
    )
}

export default Navbar;