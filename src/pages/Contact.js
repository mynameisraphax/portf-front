// src/pages/Contact.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../assets/css/contact.css';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container id="contact" className="contact">
      <h2 className="text-center">Entre em Contato</h2>
      <div className="social-icons">
            <a href="https://www.facebook.com/mynameisraphax" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/mynameisrafaelpereira" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/mynameisraphax" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/byraphathedev/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5511978692853" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
    </Container>
  );
}

export default Contact;
