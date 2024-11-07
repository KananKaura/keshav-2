import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import img1 from "../../Images/Group 36.png";
import "./About.css";

function About() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="40">
          <div className="topic">TOSH SECURITY</div>
          <div className="line1">ABOUT US</div>
          <div style={{ textAlign: "center" }}>
            We fully integrated system provides live updates and complete
          </div>
          <div
            style={{
              textAlign: "center",
              marginBottom: "25px",
              paddingBottom: "20px",
            }}
          >
            security of inbound and unbound data.
          </div>
        </MDBCol>
        <MDBCol size="6">
          <img className="img" src={img1} width="520px" height="460px" />
          <div className="overlay">
            <div className="textlay">
              <p>Team work</p>
            </div>
          </div>
        </MDBCol>
        <MDBCol size="6">
          <div className="img2">
            <img className="img4" src={img1} width="600px" height="200px" />
            <img src={img1} width="600px" height="200px" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default About;
