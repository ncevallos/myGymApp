import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";


  const styletwo = {
    backgroundColor: "#737373",
    margin: 'auto',
    height:'650px',
  };

const Home = () =>
  <div style={styletwo}>
    <Container fluid>
      <Row>
        <Col size="md-12">
            <Jumbotron backgroundImage="../../images/gym-background.jpg">
          <h1>My Gym</h1>
          <h2>Home</h2>
            </Jumbotron>
        </Col>
      </Row>
      <Row>
        <hr></hr>
        <Col size="md-12">
        <p>Welcome to My Gym App! Click on a page to explore a little bit of what our App has to offer.
          </p>

        </Col>
      </Row>
    </Container>
    <Footer></Footer>
  </div>;

export default Home;