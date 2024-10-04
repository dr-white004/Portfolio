import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Carousel } from 'react-bootstrap';
import '../styling/about.css'; 
import cs50w from '../assets/images/CS50W.png';
import cs50x from '../assets/images/CS50x.png'; 
import cv from '../assets/pdf/Ademola_Abdulkareem.pdf';

function AboutMeSection() {
  const [showCvModal, setShowCvModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  const handleCvShow = () => setShowCvModal(true);
  const handleCvClose = () => setShowCvModal(false);
  const handleCertShow = () => setShowCertModal(true);
  const handleCertClose = () => setShowCertModal(false);

  return (
    <div className='try'>
    <div id="about" className="about-me-section section">
      <Container>
        <div className="about-me-title justify-content-center">
          <h3>About Me</h3>
          <p> 
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
          </p>
        </div>

        <Row>
        
          <Col md={6}>
            <h5>Meet the Developer</h5>
            <p>
            I'm a Full-Stack Developer with a strong passion for backend development, while also leveraging my skills in frontend and cloud technologies to build robust and scalable solutions.
            </p>
            <p>
            Driven by the desire to deliver satisfying and impactful solutions, I constantly seek to push the boundaries of what's possible with technology. With an approach centered on rapid problem-solving, learning, and iteration, I thrive on innovation and proficiency in every project I take on. Always exploring new technologies,
             I am dedicated to crafting products that not only meet needs but exceed expectations.
            </p>
            <p>
              I'm constantly evolving my skills by working on various projects that challenge my technical abilities, such as orchestrating cloud environments 
              or building interactive applications. My goal is to continue developing innovative solutions while helping 
              others succeed in the tech space.
            </p>
            
            <p>
            I'm actively seeking job opportunities where I can contribute my skills, learn, and grow professionally. If you have a role that aligns with my expertise in full-stack development, backend systems, and cloud technologies, I'd love to connect. 
            Don't hesitate to reach out if you believe I'd be a good fit for your team!"
            </p>
            
          </Col>

          
          <Col md={6}>
            <div className="skills">
              <h5>My Skills</h5>
              <div className="skill-bubbles">
                <span className="skill-bubble">HTML</span>
                <span className="skill-bubble">CSS</span>
                <span className="skill-bubble">JavaScript</span>
                <span className="skill-bubble">React</span>
                <span className="skill-bubble">Bootstrap</span>
                <span className="skill-bubble">Django</span>
                <span className="skill-bubble">Git</span>
                <span className="skill-bubble">Python</span>
                <span className="skill-bubble">AWS</span>
                <span className="skill-bubble">Docker</span>
                <span className="skill-bubble">Github</span>
                <span className="skill-bubble">linux</span>
                
              </div>
            </div>
          </Col>
        </Row>

        <div className="buttons">
          <Button variant="transparent" onClick={handleCvShow} className='button-glitter cv'>CV</Button>
          <Button variant="transparent" onClick={handleCertShow} className='button-glitter'>Certificates</Button>
        </div>
      </Container>

      {/* CV Modal */}
      <Modal show={showCvModal} onHide={handleCvClose}>
        <Modal.Header closeButton>
          <Modal.Title>My CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe 
      src={cv}
      style={{ width: '100%', height: '500px' }} 
      title="My CV" 
    />
        </Modal.Body>
      </Modal>

      {/* setting my Certificates Modal */}
      <Modal show={showCertModal} onHide={handleCertClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Certificates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img src={cs50w} alt="CS50W Certificate" className="modal-image" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={cs50x} alt="CS50x Certificate" className="modal-image" />
            </Carousel.Item>
          
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
    </div>
  );
}

export default AboutMeSection;
