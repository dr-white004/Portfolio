import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styling/footer.css';

function Footer() {
  return (
    <footer className="footer section">
      <Container>
        <Row className="d-flex justify-content-between text-md-left">
        
          <Col md={5} className="mb-4 text-left time">
            <h5>About Me</h5>
            <p>
              I'm a full-stack developer passionate about building interactive and responsive web applications. Let's connect and create something amazing!
            </p>
          </Col>
          <Col md={3} className="mb-4">
             </Col>
        
          <Col  md={2} className="mb-4 text-right ml-10 time">
            <h5>Reach out</h5>
             <p> <a href="mailto:dr.white004@gmail.com">dr.white004@gmail.com</a></p> 
            <div className="social-icons" id='sepa'>
            <a href="www.linkedin.com/in/ademola-abdulkareem-7a5086282" target="_blank" rel="noopener noreferrer">  <FaLinkedin className="icon" /> </a>
            <a href="https://github.com/dr-white004/" target="_blank" rel="noopener noreferrer"> <FaGithub className="icon" /></a>
            <a href="https://twitter.com/AdemolaAbdulka7" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
            </div>
          </Col>
        </Row>

        <Row className="text-center">
          <Col >
            <p className="copyright ">&copy; {new Date().getFullYear()} Ademola. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
