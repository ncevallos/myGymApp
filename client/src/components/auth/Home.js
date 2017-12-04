import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";


  const styletwo = {
    backgroundColor: "#737373",
    margin: 'auto',
  };

const Home = () =>
  <div style={styletwo}>
    <Container fluid>
      <Row>
        <Col size="md-12">
            <Jumbotron backgroundImage="../../images/gym-background.jpg">
          <h1>My Gym</h1>
          <h2>About Us</h2>
            </Jumbotron>
        </Col>
      </Row>
      <Row>
        <hr></hr>
        <Col size="md-12">
          <p>
            Our goal in creating My Gym APP was to provide an easy out of the box solution for smaller private gyms, and gym companies, to provide their members with a functional gym app, at a cheaper more affordable price.
          </p>

        </Col>
      </Row>
    </Container>
  </div>;

export default Home;