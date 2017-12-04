import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Hours from "./pages/Hours";
import Location from "./pages/Location";
import Ptraining from "./pages/Ptraining";
import Schedules from "./pages/Schedules";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/personalTraining" component={Ptraining} />
        <Route exact path="/classSchedules" component={Schedules} />
        <Route exact path="/classSchedules/admin" component={Admin} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/gymHours" component={Hours} />
        <Route exact path="/contactUs" component={Contactus} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
