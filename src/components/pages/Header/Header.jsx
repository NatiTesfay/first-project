import './Header.css';
import React from "react";


const Header = ()=>{


    return(
        <div>
        <div class="header">
        <h2>Netanel Tesfay</h2>
        <p>Wellcome to my website <br/>here yo can see all my projects</p>
        </div>

        <div id="navbar">
        <a class="active" href="">Home</a>
        <a href="active">Projects</a>
        <a href="active">Programs</a>
        <a href="active">Contact</a>
        </div>

        </div>
    )
}
export default Header;