import React from 'react';
import './App.css';
import Home from "./home"
import Projects from "./projects"
import Profile from "./profile"
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function App() {
  return (
    <div className="main-app">
      <Navbar className="navbar-cust" expand="md">
        <Navbar.Brand className="title">
          <span className="first-letter">W</span>hat
          <span className="first-letter">&nbsp;W</span>ould
          <span className="first-letter">&nbsp;J</span>oe
          <span className="first-letter">&nbsp;D</span>ou
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-na dropdown-menu-right" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="*" >
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

// function Profile() {
//   return (
//     <Container>
//       <h1 className="profile-title">Profile</h1>
//       <h4 className="profile-subtext">Hands on engineering leader with experience leading full stack teams</h4>
//       <Row>
//         <Col lg={6} md={12}>
//           <Image
//             src={process.env.PUBLIC_URL + "Joe-Dou.jpg"}
//             fluid
//           />
//         </Col>
//         <Col lg={6} md={12}>
//           <h2>Details</h2>
//           <p><strong>Name:</strong><span>&nbsp;Joe Dou</span></p>
//           <p><strong>Location:</strong><span>&nbsp;SF Bay Area</span></p>
//           <p><strong>Technical Skill:</strong><span>&nbsp;JavaScript, ReactJS, Redux, Webpack, Backbone, Styled Components, CSS, HTML, Ruby, Grape, NodeJS, Express, Python, C++, MongoDB, Postgres, Redis, Docker, AWS, D3, AngularJS, Rails, Kubernetes</span></p>
//           <div className="logo-wrapper">
//             <a className="logo" href="https://www.linkedin.com/in/JoeDou" rel="noopener noreferrer" target="_blank" >
//               <img
//                 width={64}
//                 height={64}
//                 src={process.env.PUBLIC_URL + "linkedin.png"}
//                 alt="Generic placeholder"
//               />
//             </a>
//             <a className="logo" href="https://www.github.com/JoeDou " rel="noopener noreferrer" target="_blank" >
//               <img
//                 width={64}
//                 height={64}
//                 src={process.env.PUBLIC_URL + "github.png"}
//                 alt="Generic placeholder"
//               />
//             </a>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

export default App;
