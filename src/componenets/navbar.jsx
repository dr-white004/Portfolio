import React, { useEffect, useRef, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styling/navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import pixx from '../assets/images/pixx.jpg'; 

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const handleToggle = () => setExpanded(prev => !prev);
  
  // Close the navbar when clicking outside of it
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg" fixed="top" ref={navbarRef} expanded={expanded} className="navbar">
    <Container>
      <img src={pixx} alt="Profile" className="navbar-image" />
      <Navbar.Brand href="#home" className="navbar-brand custom-brand">Ademola </Navbar.Brand>
      <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={AnchorLink} href="#hero" onClick={() => setExpanded(false)} className="nav-link">
            <strong>Home</strong>
          </Nav.Link>
          <Nav.Link as={AnchorLink} href="#about" onClick={() => setExpanded(false)} className="nav-link">
            <strong>About</strong>
          </Nav.Link>
          <Nav.Link as={AnchorLink} href="#projects" onClick={() => setExpanded(false)} className="nav-link">
            <strong>Projects</strong>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

export default NavigationBar;
