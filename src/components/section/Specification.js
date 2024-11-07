import React from 'react';
import "./Specification.css";
import pdf from "../../Images/Group 3165.png";
import doc from "../../Images/Group 3166.png";


function Specification() {
    return (
        <div className='backgro'>
            <div className='line' style={{ paddingBottom:"20px", textAlign: "center",color:"white" }}>
                TECHNICAL
            </div>

            <div style={{ textAlign: "center", marginBottom: "25px",color:"white" }}>
                <h2>SPECIFICATION</h2>
            </div>
            <div style={{ textAlign: "center",color:"white" }}>
                Discover how the system works, the installation details and hardware requirement

            </div>
            <div style={{ textAlign: "center", marginBottom: "100px",color:"white" }}>
                for a complete setup
            </div>
            <ul className='prevent' >
                <li className='tlist'>INTRUSION PREVETION</li>
                <div className='specs'>Prevent network-based attacks using realtimevirtual excecution to maximize performance,
                    A fully integrated system provides live updates and completesecurity on any level of your network, from the internetconnection till any connected device.</div>

                <li className='tlist1'>DOCUMENTATION DOWNLOAD</li>
                <div className='specs'>Prevent network-based attacks using realtimevirtual excecution to maximize performance</div>

                <li className='tlist'>PROCARTIVE THREATS BLOCKING</li>
                <div className='specs'>Prevent network-based attacks using realtimevirtual excecution to maximize performance,
                    A fully integrated system provides live updates and completesecurity on any level of your network, from the internetconnection till any connected device.</div>

                <li className='tlist1'>SETUP REQUIREMENTS</li>
                <div className='specs'>Prevent network-based attacks using realtimevirtual excecution to maximize performance</div>
            </ul>
            <div style={{paddingBottom:"100px", paddingTop:"40px"}}>
                <img className='pdf' src={pdf}/>
                <img className='doc' src={doc}/>
                <span className='don'>DOWNLOAD</span>
            </div>
        </div>
    );
}

export default Specification;