import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Hours from "./pages/Hours";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Ptraining from "./pages/Ptraining";
import Schedules from "./pages/Schedules";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import LoginPage from './components/auth/LoginPage';
import { Security, ImplicitCallback } from '@okta/okta-react';
const config = {
  issuer: 'https://dev-238744.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oad59830wQklq6Ah0h7'
}

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/personalTraining" component={Ptraining} />
        <Route exact path="/classSchedules" component={Schedules} />
        <Route exact path="/classSchedules/admin" component={Admin} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/gymHours" component={Hours} />
        <Route exact path="/contactUs" component={Contactus} />
        <Route exact path="/login" component={LoginPage}/>
        <Route path='/implicit/callback' component={ImplicitCallback}/>
        <Route component={NoMatch} />
      </Switch>
      <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
          <Route path='/login' exact={true} component={LoginPage}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>

    </div>
  </Router>;

export default App;
