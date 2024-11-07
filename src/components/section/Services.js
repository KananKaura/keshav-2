import React from 'react';
import { Row,Col } from "react-bootstrap";
import "./Services.css";

function Services() {
    return (
        <div className='mkk'>
            <div className='line' style={{ marginTop: "100px", textAlign: "center", textDecorationLine:"underline", color:'white'}}>
                PREMIUM
            </div>
           
            <div style={{ textAlign: "center", marginBottom:"",color:"white" }}>
                <h1>SERVICES</h1>
            </div>
            <div style={{ textAlign: "center" }}>
                Discover how the system works, the installation details and hardware requirement

            </div>
            <div className='setup' style={{ textAlign: "center", margintop: "100px",paddingbottom:"1000px" }}>
                for a complete setup.
               
            </div>
            
             <div>
                <Row>
                <Col md="2" lg="2" xl="3" className='mx-auto mb-4'>
                <ul className='unlist'>
                    <li className='to'>VAPT</li>
                     <li className='to'>Red Teaming</li>
                      <li className='to'>Risk Secuirty</li>
                       <li className='to'>Cloud Security</li>
                         <li className='to'>Static Code Analysis</li>
                          
                     </ul>
                     </Col>
                     
                     <Col md="2" lg="2" xl="4" className='mx-auto mb-4'>
                     <ul className='unlist'>
                     <li className='to'>Web Application Security Testing</li>
                            <li className='to'>Network Security Assesment</li>
                            <li className='to'>Mobile Application Secuirty Assesment</li>
                             <li className='to'>Automated Vulnerability Scanning Tool</li>
                     </ul>
                     </Col>
                     </Row>
                </div>
        </div>
    );
}

export default Services;