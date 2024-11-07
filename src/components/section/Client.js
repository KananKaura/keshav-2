import React from "react";
import "./Client.css";
import google from "../../Images/Rectangle 122.png";
import cocacola from "../../Images/Rectangle 123.png";
import igtv from "../../Images/Rectangle 124.png";
import amazon from "../../Images/Rectangle 125.png";
import starbucks from "../../Images/Rectangle 126.png";
import mcd from "../../Images/Rectangle 127.png";
import nike from "../../Images/Path 4300.png";
import mi from "../../Images/Path 4301.png";
import linkedin from "../../Images/Path 4302.png";


function Client() {
    return (
        <>
            <div className="topic">
                TOSH SECURITY

            </div>
            <div>
                <h1>CLIENTS</h1>
            </div>
            <div className="topic2">
                Just having satisfied isn't good enough anymore
            </div>
            <div className="gallery" >
                <img className="mk" src={linkedin} alt="photos" width="50px" />
                <img className="mk" src={nike} lt="photos" width="50px" />
                <img className="mk" src={cocacola} alt="photos" width="50px" />
                <img className="mk" src={mi} alt="photos" width="50px" />
                <img className="mk" src={igtv} alt="photos" width="50px" />
                <img className="mk" src={amazon} alt="photos" width="75px" />
                <img className="mk" src={starbucks} alt="photos" width="50px" />
                <img className="mk" src={mcd} alt="photos" width="50px" />
                <img className="mk" src={google} alt="photos" width="50px" />


            </div>
        </>
    );
}

export default Client;                                                                                                        