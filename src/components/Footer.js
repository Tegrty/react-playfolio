import React from 'react';
import github from '../assets/img/Socials/github.png';
import instagram from '../assets/img/Socials/instagram.png';
import linkedin from '../assets/img/Socials/linkedin.png';
import spotify from '../assets/img/Socials/spotify.png';
import youtube from '../assets/img/Socials/youtube.png';


import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-4 shadow">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="text-dark">&copy; 2023 Mario Repas</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">
              <img src={spotify} alt="Spotify" className="social-icon" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" className="social-icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
