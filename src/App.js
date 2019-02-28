import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/home/Header";
import "./App.css";
import SamplePage from "./pages/SamplePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/sample" component={SamplePage} />
        </div>
      </Router>
    );
  }
}

export default App;
