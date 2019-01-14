import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import About from "./views/About/About";
import Resume from "./views/Resume/Resume";
import MyWork from "./views/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Project from "./views/Project/Project";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={MyWork} />
            <Route path="/About" component={About} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Project/:id" component={Project} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
