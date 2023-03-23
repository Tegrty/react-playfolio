import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import image1 from "../../assets/img/pexels-pixabay-434337.jpg";


const Blog = () => {

  //array of projects
  const projects = [
    {
      id: 1,
      title: "Sport-Link-Connect",
      image: image1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/Tegrty/Sport-Link-Connect",
    },
    {
      id: 2,
      title: "Two-Note",
      image: image1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/Tegrty/Two-Note",
    },
    {
      id: 3,
      title: "The-Sudo-Studio",
      image: image1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/Tegrty/The-Sudo-Studio",
    },
    {
      id: 4,
      title: "The-Weather-Space",
      image: image1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/Tegrty/The-Weather-Space",
    },
    {
      id: 5,
      title: "CLI-Employee-Tracker",
      image: image1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/Tegrty/CLI-Employee-Tracker",
    },
    {
      id: 6,
      title: "Social-Media-API",
      image: image1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      githubLink: "https://github.com/Tegrty/Social-Media-API",
    },
  ];

// map through projects array and display each project
  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
