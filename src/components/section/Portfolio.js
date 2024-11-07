import React from 'react';
import "./Portfolio.css";
import img1 from "../../Images/Group 3154.png";
import img2 from "../../Images/Group 3156.png";
import img3 from "../../Images/Group 3158.png";
import img4 from "../../Images/Group 3160.png";
import img5 from "../../Images/Group 3162.png";

function Portfolio() {
    return (
        <div>
            <div className='line' style={{ marginTop: "100px", textAlign: "center" }}>
                PRODUCT PORTFOLIO
            </div>

            <div style={{ textAlign: "center", marginBottom: "25px" }}>
                <h2>NEXT-GEN SOLUTIONS FOR TODAY`S CHALLENGE</h2>
            </div>
            <div style={{ textAlign: "center", fontSize: "12px" }}>
                Our full range of products and sercvices does'nt leave any place for

            </div>
            <div style={{ textAlign: "center", fontSize: "12px", paddingBottom:"20px" }}>
                malicious outrages
            </div >
            <div className='paper'>
            <div className="container">
                <img className='img1' src={img1} />
                <div class="bottom-left">Adopt zero trust network security</div>
                

            </div>
            <div class="container">
                <img className='img2' src={img2} />
                <div class="bottom-left">Secure any cloud</div>

            </div>
            <div class="container">
                <img className='img3' src={img3} />
                <div class="bottom-left">Automate security option</div>

            </div>
        </div>
        <div className='paper2'>
            <div className="container">
                <img className='img4' src={img5} />
                <div class="bottom-left">Respond faster with threat intelligence</div>

            </div>
            <div class="container">
                <img className='img5' src={img4} />
                <div class="bottom-left">Secure hybrid workfaces</div>

            </div>
            
        </div>

        </div>

    );
}

export default Portfolio;