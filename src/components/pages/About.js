import React from 'react';
import logo from '../../assets/img/Mariorepas-01-01.png';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Card className="about-card border-0 rounded-0 bg-light">
        <Row className="g-0">
          <Col lg={6} className="d-flex justify-content-center align-items-center">
            <div className="about-img-container">
              <Card.Img src={logo} alt="mario-icon" className="about-img img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <Card.Body className="about-text">
              <Card.Title as="h1" className="about-heading">About Page</Card.Title>
              <Card.Text as="p" className="about-description">
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;
