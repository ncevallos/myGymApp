import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import MapContainer from "../../components/MapContainer";
  
  const styletwo = {
    backgroundColor: "#737373",
    margin: 'auto',
    height: '700px'
  };
  const title = {
    color: '#000',
    fontWeight: 'bold'
  }
  
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
      <Col size="md-4">
          <p>
          <MapContainer></MapContainer>
          </p>
        </Col>
        <Col size="md-8">
          <p>
            Interested in meeting with us and learning more about what we do, and what solutions we can offer for you? We are based out of Southwest Florida, at <br></br>
            <br></br>
            <div style={title}>My Gym APP</div>
            8831 Business Park Drive, <br></br>
            Fort Myers, FL 33912<br></br>
            <br></br>
            In addition to Southwest Florida we can also be found traveling all throughout Central and South Florida, so if you are interested in using My Gym APP for your gym get in contact with us today! 
          </p>
        </Col>
      </Row>
    </Container>
  </div>;

export default Location;