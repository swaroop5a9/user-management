import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/home/Header";
import "./App.css";
import SamplePage from "./pages/SamplePage";
import LoginPage from "./pages/LoginPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Route path="/sample" component={SamplePage} />
          <Route exact path="/" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
