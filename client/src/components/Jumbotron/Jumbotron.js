import React from "react";
import "./Jumbotron.css";
import Background from '../../images/gym-background.jpg';


const Jumbotron = props =>
  <div
    className="hero text-center"
    style={{ backgroundImage: `uri(${props.backgroundImage})` }}
  >
    {props.children}
  </div>;

export default Jumbotron;
