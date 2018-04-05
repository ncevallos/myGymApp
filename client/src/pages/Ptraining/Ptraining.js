import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Thumbnail from "../../components/Thumbnail";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import image from '../../images/gym-background.jpg'
 
  const styleone = {
    backgroundColor: "#A8A8A8",
    margin: 'auto'
  }; 
  const styletwo = {
    backgroundColor: "#737373",
    color: '#FF9420',
    borderColor: '#FF9420',
    borderWidth: 5
  };
  const extrastyle = {
    backgroundColor: "#737373",
    color: '#FF9420',
    borderColor: '#FF9420',
    borderRadius: 4,
    borderWidth: 5,
    margin: 10,
    padding: 10,
  }

const Ptraining = props =>
  <div style={styletwo}>
    <Container fluid>
      <div>
      <Row>
        <Col size="md-12">
            <Jumbotron style={ { backgroundImage: `url(require("../../images/gym-background.jpg"))` } } backgroundImage="../../images/gym-background.jpg">
          <h1>My Gym</h1>
          <h2>Personal Training</h2>
            </Jumbotron>
          <hr></hr>
        </Col>
      </Row>

      <div style={extrastyle}>
      <Row>
      <List><ListItem>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"}/>
        </Col>
        <Col size="xs-8 sm-9">
      <div style={extrastyle}>
          <h3>Head Trainer</h3>
          <p>Jeremy is one of our trainers. He studied at the University of Lorem Ipsum. Where he learned how to train people to be more athletic.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
         </Col>
          </ListItem></List>
      </Row>
      <br></br>
      <Row>
      <List><ListItem>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-8 sm-9">
      <div style={extrastyle}>
          <h3>Trainer One</h3>
          <p>Jeremy is one of our trainers. He studied at the University of Lorem Ipsum. Where he learned how to train people to be more athletic.</p>
        </div>
        </Col>
          </ListItem></List>
      </Row>
      <br></br>
      <Row>
      <List><ListItem>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-8 sm-9">
        <div style={extrastyle}>
          <h3>Trainer Two</h3>
          <p>Jeremy is one of our trainers. He studied at the University of Lorem Ipsum. Where he learned how to train people to be more athletic.</p>
        </div>
        </Col>
          </ListItem></List>
          <br/>
          <br/>
      </Row>
      </div>
      </div>
    </Container>
    <Footer></Footer>
  </div>;

export default Ptraining;