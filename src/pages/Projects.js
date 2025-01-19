// src/pages/Projects.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../assets/css/projects.css';

const Projects = () => {
  return (
    <Container id="projects" className="projects">
      <h2 className="text-center">Meus Projetos</h2>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="path-to-your-image.jpg" />
            <Card.Body>
              <Card.Title>Projeto 1</Card.Title>
              <Card.Text>Descrição breve do projeto</Card.Text>
              <Button variant="primary" href="link-to-project">Ver Projeto</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Adicione mais projetos aqui */}
      </Row>
    </Container>
  );
}

export default Projects;
