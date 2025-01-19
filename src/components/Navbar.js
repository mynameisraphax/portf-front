import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/css/nav.css';


const Navigation = () => {
  const [opacity, setOpacity] = useState(0.4);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {  
        setOpacity(0.9); 
      } else {
        setOpacity(0.8); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Navbar expand="lg" variant="dark" fixed="top" style={{
      backgroundColor: `rgba(0, 0, 0, ${opacity})`,  
      transition: 'background-color 0.3s ease',  
      zIndex: 10
    }}>
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">ByRaphaX.Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/habilidades">Habilidades</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
