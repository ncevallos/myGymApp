import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Footer from "../../components/Footer";

  const styletwo = {
    backgroundColor: "#737373",
    margin: 'auto',
  };
  
  class Contactus extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div style={styletwo}>
      <Container fluid>
        <Row>
        <Col size="md-12">
            <Jumbotron backgroundImage="../../images/gym-background.jpg">
              <h1>My Gym</h1>
              <h2>Contact Us</h2>
            </Jumbotron>
            <hr></hr>
          <p>
            Want to learn more about using My GymAPP as your personal gym solution? If so, or you just have any general questions, fill out the form below and we will get to you as soon as possible!
          </p>
          <br></br>
        </Col>
          <Col size="md-10 offset-md-1">
          <List><ListItem>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (Required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="E-mail Address (Required)"
              />
              <Input
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                placeholder="Phone Number (Optional)"
              />
              <TextArea
                value={this.state.message}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Message (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
            </ListItem></List>
          </Col>
          <br></br>
          <br></br>
        </Row>
      </Container>
      <br/>
    <Footer></Footer>
      </div>
    );
  }
}


export default Contactus;