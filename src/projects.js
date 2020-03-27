import React, { Component } from 'react';
import {Container, Row, Col, Tab, Spinner, Nav } from 'react-bootstrap'
import './projects.css';

export default function Project() {
  return (
    <Tab.Container defaultActiveKey="famospace">
      <Nav variant="pills" className="tabs-padding">
        <Container>
          <Row>
            <Col sm={3} md={2} lg={2}>
              <Nav.Item className="pill-1">
                <Nav.Link eventKey="famospace">Famospace</Nav.Link>
              </Nav.Item>
            </Col>
            <Col sm={3} md={2} lg={2}>
              <Nav.Item className="pill-1">
                <Nav.Link eventKey="sudoku">Sudoku</Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Container>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="famospace">
          <ProjectIframe key="famospace" url="https://whatwouldjoedou.azurewebsites.net"/>
        </Tab.Pane>
        <Tab.Pane eventKey="sudoku">
          <ProjectIframe key="sudoku" url="https://joedou.github.io/sudoku"/>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  )
}


class ProjectIframe extends Component {
  state = {
    loading: true
  }

  onLoad = () => {
    this.setState({ loading: false })
  }
  
  render() {
    const { url, key } = this.props
    const {loading } = this.state
    const spinner = loading ? (
      <div className="center-spinner">
        <Spinner animation="border" />
      </div>) : null

    return (
      <Container>
        <Row>
          <Col>
            {spinner}
            <iframe src={url} onLoad={this.onLoad} title={key}/>
          </Col>
        </Row>
      </Container>
    )
  }
}