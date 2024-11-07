import React from 'react';
import './Architect.css';
import architect from "../../Images/Group 26.png";
import architect1 from "../../Images/Group 28.png";
import architect2 from "../../Images/Group 36.png";
import video from "../../Images/Group 3150.png";

function Architect() {
    return (
        <div>
            <div className='line1' >
                ARCHITECTURE
            </div>
            <div style={{ textAlign: "center" }}>
                We fully integrated system provides live updates and complete
            </div>
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
                security of inbound and unbound data.
            </div>
            <div className='bassi'>
            
            <div className="example">
                <img className="background-image" src={architect} />
                <div className="overlay">
                    <img className='video' src={video}/>
                </div>
            </div>

            <div className="example">
                <img className="background-image" src={architect} />
                <div className="overlay">
                    <img className='video' src={video}/>
                </div>
            </div>

            <div className="example">
                <img className="background-image" src={architect} />
                <div className="overlay">
                    <img className='video' src={video}/>
                </div>
            </div>

            <div className="example">
                <img className="background-image" src={architect1} />
                <div className="overlay">
                    <img className='video' src={video}/>
                </div>
            </div>

            <div className="example">
                <img className="background-image" src={architect2} />
                <div className="overlay">
                    <img className='video' src={video}/>
                </div>
            </div>

            <div className="example">
                <img className="background-image" src={architect} />
                <div className="overlay">
                    <img className='video' src={video}/>
                </div>
            </div>
            
            <div className="example">
                <img className="background-image" src={architect} />
                <div className="overlay">
                    <img className='video' src={video}/>
                </div>
            </div>


            </div>
        </div>
    );
}

export default Architect;