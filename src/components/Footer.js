import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/foot.css';

const Footer = () => {
  return (
    <footer className="footerr">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="text-footer">&copy; My Portfolio | Designed byRaphaX - 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
