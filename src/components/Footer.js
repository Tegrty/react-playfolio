import React from 'react';
import github from '../assets/img/Socials/github.png';
import instagram from '../assets/img/Socials/instagram.png';
import linkedin from '../assets/img/Socials/linkedin.png';
import spotify from '../assets/img/Socials/spotify.png';
import youtube from '../assets/img/Socials/youtube.png';



import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer id="footer" className="bg-light py-4 shadow">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="text-dark">&copy; 2023 Mario Repas</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com/Tegrty" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/therealmariorepas/?hl=en&__coig_restricted=1" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/mario-repas-46b85b25a/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://open.spotify.com/user/chooch63?si=fcab30cbe61149c7" target="_blank" rel="noopener noreferrer">
              <img src={spotify} alt="Spotify" className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@mariorepas9100" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" className="social-icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
