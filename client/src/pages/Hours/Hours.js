import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
 

  const styletwo = {
    backgroundColor: "#737373",
    margin: 'auto',
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
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Row>
          <Col size="md-2">
          <p style={header}>Monday</p>
          <hr></hr>
          <br></br>
          <List><ListItem>
          <p style={header}>Open</p>
          <hr></hr>
          <p style={header}>5am - 12 pm</p>
          </ListItem></List>
          </Col>
          <Col size="md-2">
          <p style={header}>Tuesday</p>
          <hr></hr>
          <br></br>
          <List><ListItem>
          <p style={header}>Open</p>
          <hr></hr>
          <p style={header}>5am - 12 pm</p>
          </ListItem></List>
          </Col>
          <Col size="md-2">
          <p style={header}>Wednesday</p>
          <hr></hr>
          <br></br>
          <List><ListItem>
          <p style={header}>Open</p>
          <hr></hr>
          <p style={header}>5am - 12 pm</p>
          </ListItem></List>
          </Col>
          <Col size="md-2">
          <p style={header}>Thursday</p>
          <hr></hr>
          <br></br>
          <List><ListItem>
          <p style={header}>Open</p>
          <hr></hr>
          <p style={header}>5am - 12 pm</p>
          </ListItem></List>
          </Col>
          <Col size="md-2">
          <p style={header}>Friday</p>
          <hr></hr>
          <br></br>
          <List><ListItem>
          <p style={header}>Open</p>
          <hr></hr>
          <p style={header}>5am - 12 pm</p>
          </ListItem></List>
          </Col>
          <Col size="md-2">
          <p style={header}>Saturday/Sunday</p>
          <hr></hr>
          <br></br>
          <List><ListItem>
          <p style={header}>Open</p>
          <hr></hr>
          <p style={header}>7am - 8 pm</p>
          </ListItem></List>
          </Col>
          </Row>
        </Col>
      </Row>
      <br/>
    </Container>
    <Footer></Footer>
  </div>;

export default Hours;