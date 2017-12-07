import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";


  const styletwo = {
    backgroundColor: "#737373",
    margin: 'auto',
    height:'650px',
  };

const About = () =>
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
        <p>My Gym App was created as an out of the box, white label solution for small privately owned gyms, to be able to offer their members a personalized app experience. Our App provides the shell for what most gyms require, and the customization options, to make your version of the App fit your gym, go from there.</p>
          <p><strong>
            Technologies Used</strong>
            <br></br>
            <li> Okta – React Authentication</li>
            <li> Google Maps – React – NPM Package</li>
            <li> MERN Stack – </li><br></br>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>Node.JS</li><br></br>

          </p>

        </Col>
      </Row>
    </Container>
    <Footer></Footer>
  </div>;

export default About;