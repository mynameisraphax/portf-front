import React from 'react';
import Hero from '../components/Hero';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/hom.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
    </div>
  );
};

export default Home;
