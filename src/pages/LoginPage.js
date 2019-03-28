import React from "react";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { AppBar, Toolbar, Button } from "@material-ui/core";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "login"
    };
  }

  handleView = view => {
    this.setState({
      view: view
    });
  };

  
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={() => this.handleClick("/")}>Login</Button>
          </Toolbar>
        </AppBar>
        {this.state.view === "login" && <Login handleView={this.handleView}/>}
        {this.state.view === "register" && <Register handleView={this.handleView}/>}
        {/* <ForgotPassword/> */}
      </div>
    );
  }
}

export default LoginPage;
