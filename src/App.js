import React from 'react';
import underConstruction from './under_construction.png';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function AppV2() {
  return (
    <div className="main-app">
      <Navbar className="navbar-cust" expand="md">
        <Navbar.Brand className="title">
          <span className="first-letter">W</span>hat&nbsp;
          <span className="first-letter">&nbsp;W</span>ould&nbsp;
          <span className="first-letter">&nbsp;J</span>oe&nbsp;
          <span className="first-letter">&nbsp;D</span>ou
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/users">
                <Nav.Link>Users</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={underConstruction} className="App-logo" alt="underConstruction" />
        <a
          className="App-link"
          href="https://whatwouldjoedou.azurewebsites.net/"
          target="_blank"
          rel="noopener noreferrer"
          >
          Famo-space
        </a>
        <a
          className="App-link"
          href="https://http://joedou.github.io/sudoku//"
          target="_blank"
          rel="noopener noreferrer"
          >
          Sudoku
        </a>
      </header>
    </div>
  );
}

export default App;
