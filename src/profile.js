import React from 'react';
import './profile.css'
import {Container, Row, Col, Image } from 'react-bootstrap'

export default function Profile() {
  return (
    <Container>
      <h1 className="profile-title">Profile</h1>
      <h4 className="profile-subtext">Hands-on engineering leader with experience leading full stack teams</h4>
      <Row>
        <Col lg={6} md={12}>
          <Image
            src={process.env.PUBLIC_URL + "Joe-Dou.jpg"}
            fluid
          />
        </Col>
        <Col lg={6} md={12}>
          <p><strong>Name:</strong><span>&nbsp;Joe Dou</span></p>
          <p><strong>Location:</strong><span>&nbsp;SF Bay Area</span></p>
          <p><strong>Technical Skill:</strong><span>&nbsp;JavaScript, ReactJS, Redux, Webpack, Backbone, Styled Components, CSS, HTML, Ruby, Grape, NodeJS, Express, Python, C++, MongoDB, Postgres, Redis, Docker, AWS, D3, AngularJS, Rails, Kubernetes</span></p>
          <div className="logo-wrapper">
            <a className="logo" href="https://www.linkedin.com/in/JoeDou" rel="noopener noreferrer" target="_blank" >
              <img
                width={64}
                height={64}
                src={process.env.PUBLIC_URL + "linkedin.png"}
                alt="Generic placeholder"
              />
            </a>
            <a className="logo" href="https://www.github.com/JoeDou " rel="noopener noreferrer" target="_blank" >
              <img
                width={64}
                height={64}
                src={process.env.PUBLIC_URL + "github.png"}
                alt="Generic placeholder"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}