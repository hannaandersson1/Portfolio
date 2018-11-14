import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import About from "./views/About/About";
import Resume from "./views/Resume/Resume";
import MyWork from "./views/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <div>
            <Route exact path="/" component={MyWork} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Resume" component={Resume} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
