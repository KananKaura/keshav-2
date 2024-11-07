import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "../../Images/download.jpeg";
import "./Footer.css";

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        <img className="logo" src={logo} alt="logo"  />
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
           

            <MDBCol md="2" lg="2" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Popular Resources</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Communities
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Content Library
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Inside IT
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Cyberpedia
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Event Centre
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Investors
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Legal Notices</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Trust Centre
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Terms of use
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Documents
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Popular Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 News Room
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Contact  Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Manage Email Preferences
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Report a Vulnerabity
                </a>
              </p>
            </MDBCol>
            <MDBCol md="1" lg="1" xl="1" className='mx-auto mb-md-0 mb-4'>
            <div class="vl"></div>
            </MDBCol>
                
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            
              <h6 className='text-uppercase fw-bold mb-4'>Subscribe to our Newsletter</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> By subscribing you agree to recieve weekly
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />newsletter regarding updates / offers etc 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ©2021 Reserved by TOSH SECURITY
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        Our business partner TOSH SECURITY
        </a>
      </div>
    </MDBFooter>
  );
}