import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Testimonial.css";
import pic from "../../Images/testmonal.png"
function Testimonials() {
  return (
    <>
    <div className='bacl'>
    
      <div className='line' style={{ marginTop: "", textAlign: "center" }}>
        CLIENTS VIEW
      </div>

      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <h1>TESTIMONIALS</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        We like to let people on our behalf and explain how the

      </div>
      <div style={{ textAlign: "center", marginBottom: "200px" }}>
        TOSH SECURITY solution.
      </div>
      <div className='test'>
        <Row>
        <img className="pic" src={pic} align="left"/>
          <Col md="4" lg="4" xl="5" className='mx-auto mb-4'>
            
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
            vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
            accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
            augue duis dolore te

            <div style={{ marginTop: "20px" }}>Scort Watson </div>
            <div style={{ marginTop: "20px", marginBottom: "100px" }}>Designation </div>

          </Col>
          <img className="pic2" src={pic} alt="" align="right"/>
          <Col md="4" lg="4" xl="5" className='mx-auto mb-4'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
            vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
            accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
            augue duis dolore te
            <div style={{ marginTop: "20px" }}>Scort Watson </div>
            <div style={{ marginTop: "20px", marginBottom: "100px" }}>Designation </div>
          </Col>
        </Row>
      </div>
    </div>
    </>
    
  );
}
export default Testimonials; 