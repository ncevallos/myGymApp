import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
  
  const styletwo = {
    backgroundColor: "#737373",
    margin: 'auto',
  };
  
const Location = () =>
  <div style={styletwo}>
    <Container fluid>
      <Row>
        <Col size="md-12">
            <Jumbotron backgroundImage="../../images/gym-background.jpg">
          <h1>My Gym</h1>
          <h2>Our Location</h2>
            </Jumbotron>
        </Col>
      </Row>
      <Row>
      <hr></hr>
        <Col size="md-12">
          <p>
            Interested in meeting with us and learning more about what we do, and what solutions we can offer for you? We are based out of Southwest Florida, but can be found traveling all throughout Central and South Florida. 
          </p>
          <p>
          Google Maps???
          </p>
        </Col>
      </Row>
    </Container>
  </div>;

export default Location;