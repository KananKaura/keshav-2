import React from 'react';
import Navbar from "./Navbar";
import "./Header.css";
import line1 from "../../Images/Group 3151.png";
import line2 from "../../Images/Group 3152.png";
import icon from "../../Images/Group 3150.png"

function Header() {
  
  return (
    <div className="navb">
        <Navbar/>
        <img className ="cline" src={line1} alt="" align="left" />
         <div className='lin' style={{ marginTop:"100px", textAlign:"center"}}>
        TOSH SECURITY
        </div>
       
              <div className="test" style={{textAlign:"center",marginBottom:"25px"}}>
                 <h2>Managing security threats in the age of <br></br>zero trust.</h2>
              </div>
              <div style={{textAlign:"center", fontSize:"12px",color:"white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              
              </div>
              <div style={{ textAlign:"center", fontSize:"12px",paddingBottom:"80px",color:"white"}}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </div>
              <div className='corner'>
              <p className="rcorners2" >Know us more</p>
              <img className='playicon' src={icon}  height="30" width="30" />
              <p className='watch'>Watch Video</p>
              </div>
              
    </div>
  );
}

export default Header;