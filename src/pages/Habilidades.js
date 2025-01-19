// src/pages/Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/services.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaPhp, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiKubernetes, SiPython } from 'react-icons/si';

const Habilidades = () => {
  return (
    <Container id="services" className="services">
      <h2 className="text-center">Minhas Habilidades & Expertises</h2>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Desenvolvimento Web</Card.Title>
              <Card.Text>React.</Card.Text>
              <Card.Text>VueJS.</Card.Text>
              <Card.Text>HTML.</Card.Text>
              <Card.Text>CSS.</Card.Text>
              <Card.Text>JS.</Card.Text>
              <Card.Text>PHP.</Card.Text>
              <Card.Text>SQL.</Card.Text> 
              <Card.Text>Banco de dados.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>infra TI & DevOps</Card.Title>
              <Card.Text>Redes de computadores.</Card.Text>
              <Card.Text>Python.</Card.Text>
              <Card.Text>Docker.</Card.Text>
              <Card.Text>Terraform.</Card.Text>
              <Card.Text>GitLab.</Card.Text>
              <Card.Text>Git.</Card.Text>
              <Card.Text>Servidores.</Card.Text>
              <Card.Text>Computadores.</Card.Text>
              <Card.Text>AWS.</Card.Text>
              <Card.Text>Azure.</Card.Text>
              <Card.Text>Segurança Digital.</Card.Text>
              <Card.Text>Active directives.</Card.Text>
              <Card.Text>Cluster.</Card.Text>
              <Card.Text>Pipelines CI/CD.</Card.Text>
              <Card.Text>Protocolos de Rede.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <div className="skills-icons">
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJs title="JavaScript" />
          <SiPython title="Python" />
          <FaReact title="React" />
          <FaVuejs title="Vue.js" />
          <FaPhp title="PHP" />
          <FaDatabase title="DBA" />
          <FaDocker title="Docker" />
          <SiKubernetes title="Kubernetes" />
          <FaAws title="AWS" />
        </div>
      </Row>
    </Container>
  );
}

export default Habilidades;
