import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav">
            <h3>Contact</h3>
          </Link>
        </div>

        <div className="box" />
        <Switch>
          <Route Component={History} path="/about/history" />
          <Route Component={Contact} path="/about/contact" />
          <Route Component={About} path="/about" />
        </Switch>
      </div>
    );
  }
}
