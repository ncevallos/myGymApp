import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
 

  const styletwo = {
    backgroundColor: "#737373",
    margin: 'auto',
    height:'650px',
  };
  const header = {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20

  }
const Hours = () =>
  <div style={styletwo}>
    <Container fluid>
      <Row>
        <Col size="md-12">
            <Jumbotron backgroundImage="../../images/gym-background.jpg">
          <h1>My Gym</h1>
          <h2>Gym Hours</h2>
            </Jumbotron>
        </Col>
      </Row>
      <Row>
      <hr></hr>
        <Col size="md-12">
          <Row>
          <Col size="md-2">
          <p style={header}>Monday
          <hr></hr>
          <br></br>
          <List><ListItem>
          Open
          <hr></hr>
          5am - 12 pm
          </ListItem></List></p>
          </Col>
          <Col size="md-2">
          <p style={header}>Tuesday
          <hr></hr>
          <br></br>
          <List><ListItem>
          Open
          <hr></hr>
          5am - 12 pm
          </ListItem></List></p>
          </Col>
          <Col size="md-2">
          <p style={header}>Wednesday
          <hr></hr>
          <br></br>
          <List><ListItem>
          Open
          <hr></hr>
          5am - 12 pm
          </ListItem></List></p>
          </Col>
          <Col size="md-2">
          <p style={header}>Thursday
          <hr></hr>
          <br></br>
          <List><ListItem>
          Open
          <hr></hr>
          5am - 12 pm
          </ListItem></List></p>
          </Col>
          <Col size="md-2">
          <p style={header}>Friday
          <hr></hr>
          <br></br>
          <List><ListItem>
          Open
          <hr></hr>
          5am - 12 pm
          </ListItem></List></p>
          </Col>
          <Col size="md-2">
          <p style={header}>Saturday/Sunday
          <hr></hr>
          <br></br>
          <List><ListItem>
          Open
          <hr></hr>
          7am - 8 pm
          </ListItem></List></p>
          </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>;

export default Hours;