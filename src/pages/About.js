import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/about.css';
import img from '../assets/images/your-photo.jpg';

const About = () => {
  return (
    <Container>
      <Row className="about">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Sobre mim</Card.Title>
              <Card.Text>
              Olá, sou Raphael Pereira, desenvolvedor front-end com experiência em React e Vue.js, além de trabalhos
            utilizando HTML, CSS e JavaScript puro, sem frameworks. Também possuo conhecimento no back-end com PHP,
            trabalhando principalmente em projetos sem frameworks.<br /><br />
            Tenho uma base sólida em DevOps, com habilidades em deploy automatizado, configuração de ambientes para
            deploy e versionamento utilizando ferramentas como Git, Docker, Terraform e Vagrant. Além disso, possuo
            amplo conhecimento em serviços de nuvem como AWS e Azure, aplicando-os para soluções de infraestrutura e
            deploy.<br /><br />
            Minha experiência abrange servidores web, Active Directory (AD/DC), firewalls e redes, além de
            administração de máquinas cliente e servidores em sistemas Windows e Linux. Também tenho habilidade em
            automação com Python, especialmente para manipulação de dados, e na administração de bancos de dados,
            incluindo modelagem, estruturação, relacionamento e análise. Também tenho experiência com Business
            Intelligence (BI) e práticas de suporte técnico de Nível 3 (N3) em TI.<br /><br />
            Estou sempre buscando oportunidades para evoluir e aplicar minhas habilidades em novos desafios. Sinta-se à
            vontade para explorar minhas experiências enquanto navega por aqui.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img src={img} alt="Your photo" className="img-about" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
