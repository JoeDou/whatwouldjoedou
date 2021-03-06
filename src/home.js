import React from 'react';
import './home.css';
import { Media, Container, Row, Col } from 'react-bootstrap'
import { useWindowDimensions } from './utils'

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <div>
      { width > 800 ? <FullBlockView/> : <HalfBlockView/> }
      <Container>
        <Row>
          <Col>
            <div className="job-list-title">Employment History</div>
            {JobList()}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
  
const ProfileCard = ({ name, title, paragraph, url }) => (
  <Media className="profile-card">
    <img
      width={96}
      height={96}
      className="align-self-start mr-3"
      src={process.env.PUBLIC_URL + url}
      alt="Generic placeholder"
    />
    <Media.Body>
      <h3>{name}</h3>
      <h5>{title}</h5>
      <p>{paragraph}</p>
    </Media.Body>
  </Media>
)
  
function JobList() {
  return jobs.map(job => {
    let { name, title, paragraph, url } = job
    return <ProfileCard key={title} name={name} title={title} paragraph={paragraph} url={url}/>
  })
}

function FullBlockView() {
  let style = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/bench-v1.jpg'})`,
    backgroundSize: 'cover'
  }

  return (
    <div className="parallex fixed-img" style={style}>
      <div className="parallex-font">Joe Dou</div>
      <div className="subtext">Software Developer</div>
      <div className="subtext">Engineering Leader</div>
    </div>
  )
}

function HalfBlockView() {
    let style = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/bench-v2.jpg'})`,
    backgroundSize: 'cover'
  }
  return (
    <div className="fullscreen" style={style}>
      <div className="parallex-font">Joe Dou</div>
      <div className="subtext">Software Developer</div>
      <div className="subtext">Engineering Leader</div>
    </div>
  )
}

const jobs = [
  {
    name: 'Riviera Partners',
    title: 'Director of Engineering',
    url: '/riviera-partners.png',
    paragraph: ''
  }, {
    name: 'Riviera Partners',
    title: 'Senior Software Engineer',
    url: '/riviera-partners.png',
    paragraph: ''
  }, {
    name: 'Crittercism/Apteligent',
    title: 'Software Engineer',
    url: '/apteligent.png',
    paragraph: ''
  }, {
    name: 'Lockheed Martin',
    title: 'Control Account Manager',
    url: '/lockheed.png',
    paragraph: ''
  }, {
    name: 'Lockheed Martin',
    title: 'Simulation Lead',
    url: '/lockheed.png',
    paragraph: ''
  }, {
    name: 'Lockheed Martin',
    title: 'System Design Enginner',
    url: '/lockheed.png',
    paragraph: ''
  }, {
    name: 'Lockheed Martin',
    title: 'Engineering Leadership Development Program',
    url: '/lockheed.png',
    paragraph: ''
  }
]