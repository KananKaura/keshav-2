import React, { Component , useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from "../../Images/download.png";
import secure from "../../Images/Menuicon.png";
import "./Header.css";
import line from "../../Images/Group 3147.png"



function Topbar() {
  
  return (
    <>
      <Navbar className="navb">
        

        <Container><Navbar.Brand href="#home"><img className="logo" src={logo} alt="logo"  /></Navbar.Brand>
        <Nav>
        <Link className="link" to="/NETWORK SECURITY">
              <Nav.Link className="links" href="/NETWORK SECURITY">NETWORK SECURITY</Nav.Link>
              <img className="underline" src={line}   />
            </Link>
            <Link className="link" to="/RESOURCES">
              <Nav.Link className="links" href="/RESOURCES">RESOURCES</Nav.Link>
            </Link>
        
            <Link className="link" to="/SERVICES">
              <Nav.Link className="links" href="/SERVICES">SERVICES</Nav.Link>
            </Link>
            <Link className="link" to="/BLOG">
              <Nav.Link className="links" href="/BLOG">BLOG</Nav.Link>
            </Link>
          </Nav>
          <Navbar.Brand href="#home"><img className="logo1" src={secure} alt="logo" /></Navbar.Brand>
         
        </Container>
      </Navbar>
     
      
      
     
    </>
  );
}

export default Topbar; 