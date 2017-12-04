import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import LtContain from "../../components/LtContain";
import API from "../../utils/API";
  

  const styletwo = {
    backgroundColor: "#737373",
    margin: 'auto',
  };
  const header = {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20

  }

class Schedules extends Component {
  state = {
    schedules: [],
    Mschedules: [],
    Tschedules: [],
    Wschedules: [],
    Rschedules: [],
    Fschedules: [],
    Sschedules: [],
    nameOfClass: "",
    teacher: "",
    dayOfWeek: "",
    timeOfDay: ""
  };

  componentDidMount() {
    this.loadClasses();
    this.loadMondayClasses();
    this.loadTuesdayClasses();
    this.loadWedClasses();
    this.loadThursClasses();
    this.loadFriClasses();
    this.loadWkendClasses();
  }

  loadClasses = () => {
    API.getClasses()
      .then(res => 
        this.setState({ schedules: res.data, nameOfClass: "", teacher: "", dayOfWeek: "", timeOfDay: "" })
      )
      .catch(err => console.log(err));
  };

  loadMondayClasses = () => {
    API.getMondayClasses()
      .then(res => 
        this.setState({ Mschedules: res.data, nameOfClass: "", teacher: "", dayOfWeek: "", timeOfDay: "" })
      )
      .catch(err => console.log(err));
  };

  loadTuesdayClasses = () => {
    API.getTuesdayClasses()
      .then(res => 
        this.setState({ Tschedules: res.data, nameOfClass: "", teacher: "", dayOfWeek: "", timeOfDay: "" })
      )
      .catch(err => console.log(err));
  };

  loadWedClasses = () => {
    API.getWedClasses()
      .then(res => 
        this.setState({ Wschedules: res.data, nameOfClass: "", teacher: "", dayOfWeek: "", timeOfDay: "" })
      )
      .catch(err => console.log(err));
  };

  loadThursClasses = () => {
    API.getThursClasses()
      .then(res => 
        this.setState({ Rschedules: res.data, nameOfClass: "", teacher: "", dayOfWeek: "", timeOfDay: "" })
      )
      .catch(err => console.log(err));
  };

  loadFriClasses = () => {
    API.getFriClasses()
      .then(res => 
        this.setState({ Fschedules: res.data, nameOfClass: "", teacher: "", dayOfWeek: "", timeOfDay: "" })
      )
      .catch(err => console.log(err));
  };

  loadWkendClasses = () => {
    API.getWkendClasses()
      .then(res => 
        this.setState({ Sschedules: res.data, nameOfClass: "", teacher: "", dayOfWeek: "", timeOfDay: "" })
      )
      .catch(err => console.log(err));
  };

  deleteClass = id => {
    API.deleteClass(id)
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
      API.saveClasses({
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
          <h1>My Gym</h1>
          <h2>Class Schedules</h2>
            </Jumbotron>
        </Col>
      </Row>
      <Row>
      <hr></hr>
        <Col size="md-12">
          <Row>
          <Col size="md-2">
          <LtContain />
          <div style={header}>
          <p>Monday</p>
          <hr></hr>
          </div>
          {this.state.Mschedules.length ? (
              <List>
                {this.state.Mschedules.map(Mschedules => (
                  <ListItem key={Mschedules._id}>
                      <strong>
                        {Mschedules.nameOfClass} by {Mschedules.teacher}
                        <br></br>
                        {Mschedules.dayOfWeek} at {Mschedules.timeOfDay}
                      </strong>
                    <DeleteBtn onClick={() => this.deleteClass(Mschedules._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-2">
          <div style={header}>
          <p>Tuesday</p>
          <hr></hr>
          </div>
          {this.state.Tschedules.length ? (
              <List>
                {this.state.Tschedules.map(Tschedules => (
                  <ListItem key={Tschedules._id}>
                      <strong>
                        {Tschedules.nameOfClass} by {Tschedules.teacher}
                        <br></br>
                        {Tschedules.dayOfWeek} at {Tschedules.timeOfDay}
                      </strong>
                    <DeleteBtn onClick={() => this.deleteClass(Tschedules._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-2">
          <div style={header}>
          <p>Wednesday</p>
          <hr></hr>
          </div>
          {this.state.Wschedules.length ? (
              <List>
                {this.state.Wschedules.map(Wschedules => (
                  <ListItem key={Wschedules._id}>
                      <strong>
                        {Wschedules.nameOfClass} by {Wschedules.teacher}
                        <br></br>
                        {Wschedules.dayOfWeek} at {Wschedules.timeOfDay}
                      </strong>
                    <DeleteBtn onClick={() => this.deleteClass(Wschedules._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-2">
          <div style={header}>
          <p>Thursday</p>
          <hr></hr>
          </div>
          {this.state.Rschedules.length ? (
              <List>
                {this.state.Rschedules.map(Rschedules => (
                  <ListItem key={Rschedules._id}>
                      <strong>
                        {Rschedules.nameOfClass} by {Rschedules.teacher}
                        <br></br>
                        {Rschedules.dayOfWeek} at {Rschedules.timeOfDay}
                      </strong>
                    <DeleteBtn onClick={() => this.deleteClass(Rschedules._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-2">
          <div style={header}>
          <p>Friday</p>
          <hr></hr>
          </div>
          {this.state.Fschedules.length ? (
              <List>
                {this.state.Fschedules.map(Fschedules => (
                  <ListItem key={Fschedules._id}>
                      <strong>
                        {Fschedules.nameOfClass} by {Fschedules.teacher}
                        <br></br>
                        {Fschedules.dayOfWeek} at {Fschedules.timeOfDay}
                      </strong>
                    <DeleteBtn onClick={() => this.deleteClass(Fschedules._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-2">
          <div style={header}>
          <p>Saturday/Sunday</p>
          <hr></hr>
          </div>
          {this.state.Sschedules.length ? (
              <List>
                {this.state.Sschedules.map(Sschedules => (
                  <ListItem key={Sschedules._id}>
                      <strong>
                        {Sschedules.nameOfClass} by {Sschedules.teacher}
                        <br></br>
                        {Sschedules.dayOfWeek} at {Sschedules.timeOfDay}
                      </strong>
                    <DeleteBtn onClick={() => this.deleteClass(Sschedules._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          </Row>
        </Col>     
        </Row>
        <br></br>
        <br></br>
      </Container>
      </div>
    );
  }
}

export default Schedules;