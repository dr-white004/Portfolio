import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, } from 'react-icons/fa';
import '../styling/hero.css'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';


function HeroSection() {
  return (
    <div id="hero" className="hero-section section">
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="hero-title">HEY, I'M ADEMOLA ABDULKAREEM</h1>
            
            <p className="hero-description">
            A results-oriented Full-stack Developer with expertise in building, deploying, and managing websites and web applications. Ensuring smooth product development cycles and driving the overall success of digital products.
            </p>
            <AnchorLink href="#projects"><Button variant="primary" href="#projects" className="hero-button">
              PROJECTS
            </Button></AnchorLink> 
          </Col>
        </Row>

       
        <div className="icon-container d-none d-md-flex"> {/* a little tricky */}
       
        <a href="https://www.linkedin.com/in/ademola-abdulkareem-166029243/" target="_blank" rel="noopener noreferrer">  <FaLinkedin className="icon" /> </a>
        
          <a href="https://github.com/dr-white004/" target="_blank" rel="noopener noreferrer">

          <FaGithub className="icon" />
          </a>
          <a href="https://twitter.com/AdemolaAbdulka7" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
          </a>

          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
          </a>

          
        </div>

      </Container>
    </div>
  );
}

export default HeroSection;
