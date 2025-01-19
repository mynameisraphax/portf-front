import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './style.css';
import Contacts from '../pages/Contact';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content text-center text-white">
          <h1>Analista TI & Front-end Developer</h1>
          <p className="texto-hero">Web Developer | TI Technical Support and Analyst | Automation Py</p>
          <Button variant="primary" href="/contact">Contact Me</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
