import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Home from "./home"
import Projects from "./projects"
import Profile from "./profile"

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

export default App;
