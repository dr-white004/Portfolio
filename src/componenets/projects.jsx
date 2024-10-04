import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../styling/project.css'; 
import projectImg1 from '../assets/images/project-img1.png'
import projectImg2 from '../assets/images/project-img2.png'
import projectImg3 from '../assets/images/project-img3.png'


function Project() {
  const projects = [
    {
      title: 'Education Tracker',
      description: 'Education Tracker is a comprehensive book tracking app built with Django Rest Framework and React. It allows users to organize their reading into past, present, and future libraries, add detailed notes per chapter, and get personalized book recommendations. The app features secure authentication with SimpleJWT, a modern interface styled with Tailwind CSS, and seamless integration with OpenLibrary for discovering new reads.',
      imageUrl: projectImg1,
      link: 'https://education-tracker.onrender.com/',
    },
    {
      title: 'Timelines',
      description: 'Explore Timelines, a social media platform that allows users to create posts, follow others, and engage through likes and comments. Built with Django, it offers a clean, user-friendly interface for seamless social networking..',
      imageUrl: projectImg2,
      link: 'http://timeline-cquq.onrender.com/',
    },
    {
      title: 'Auction it',
      description: 'Dive into Auctions, an online marketplace where users can list items, place bids, and win auctions. With real-time updates on bids, comments, and watchlist features, this Django-powered platform delivers a smooth, dynamic auction experience.',
      imageUrl: projectImg3,
      link: 'https://demola.pythonanywhere.com/',
    },
  ];

  return (
    <div id="projects"className="project-section">
      <h3 className="text-center retake">My Projects</h3>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col xs={12} md={6} lg={8} className="mb-3" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <Card className="project-card-content">
                <Row>
                  <Col xs={4} className="project-image">
                    <img src={project.imageUrl} alt={project.title} />
                  </Col>
                  <Col xs={8} className="project-details">
                    <Card.Body>
                      <Card.Title className='project-title'>{project.title}</Card.Title>
                      <Card.Text className="project-small-text">{project.description}</Card.Text>
                  
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Project;
