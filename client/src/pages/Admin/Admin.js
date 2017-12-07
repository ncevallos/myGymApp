import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import LtContain from "../../components/LtContain";
import Schedules from "../Schedules";
import API from "../../utils/API";
  

  const styletwo = {
    backgroundColor: "#737373",
    margin: 'auto',
  };
  const boxstyle = {
    backgroundColor: "#737373",
    height:'350px',
    margin: 'auto',
    textAlign: 'center',
    border: '2px',
    borderColor: "#000"
  };

class Admin extends Component {
  state = {
    schedules: [],
    nameOfClass: "",
    teacher: "",
    dayOfWeek: "",
    timeOfDay: ""
  };

  componentDidMount() {
    this.loadClasses();
  }

  loadClasses = () => {
    API.getClasses()
      .then(res => 
        this.setState({ schedules: res.data, nameOfClass: "", teacher: "", dayOfWeek: "", timeOfDay: "" })
      )
      .catch(err => console.log(err));
  };

  deleteClasses = id => {
    API.deleteClasses(id)
      .then(res => this.loadClasses())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.nameOfClass && this.state.teacher) {
      API.saveClass({
        nameOfClass: this.state.nameOfClass,
        teacher: this.state.teacher,
        dayOfWeek: this.state.dayOfWeek,
        timeOfDay: this.state.timeOfDay
      })
        .then(res => this.loadClasses())
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
          <h1>Admin Area</h1>
          <h2>Add/Delete Classes</h2>
            </Jumbotron>
            <br></br>
            <br></br>
        </Col>
      </Row>
      <Row>
          <Col size="md-12">
            <form>
            <List><ListItem>
              <Input
                value={this.state.nameOfClass}
                onChange={this.handleInputChange}
                name="nameOfClass"
                placeholder="Name Of Class (required)"
              />
              <Input
                value={this.state.teacher}
                onChange={this.handleInputChange}
                name="teacher"
                placeholder="Teacher (required)"
              />
              <Input
                value={this.state.dayOfWeek}
                onChange={this.handleInputChange}
                name="dayOfWeek"
                placeholder="Day of the Week"
              />
              <Input
                value={this.state.timeOfDay}
                onChange={this.handleInputChange}
                name="timeOfDay"
                placeholder="Time of the Day (Military)"
              />
              <FormBtn
                disabled={!(this.state.nameOfClass && this.state.dayOfWeek)}
                onClick={this.handleFormSubmit}
              >
                Submit Class
              </FormBtn>

              </ListItem></List>
            </form>
            <br></br>
            <br></br>
            <Schedules></Schedules>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Admin;