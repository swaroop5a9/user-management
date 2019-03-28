import React from "react";
import { Button, Card, CardContent, Typography, Link } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: {
      username: "",
      password: "",
      selected: [],
      uerror: false,
      perror: false,
      view: "login"
      // }
    };
  }

  handleChange = event => {
    const eve = { ...event };
    this.setState(prevState => ({
      // ...prevState, user: {
      [eve.target.name]: eve.target.value
      // }
    }));
  };

  handleRegister = () => {
    this.props.handleView("register");
    // this.setState({
    //   view:'register'
    // })
  };

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography color="textPrimary">Login Page</Typography>
            <div>
              <TextField
                id="username"
                name="username"
                label="User Name"
                error={this.state.uerror}
                variant="outlined"
                onChange={this.handleChange}
              />
              <br />
              <br />
              <TextField
                id="password"
                name="password"
                type="password"
                error={this.state.perror}
                label="Password"
                variant="outlined"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div>
              {/* <Link to="/home"> */}
              <Button
                variant="outlined"
                size="medium"
                id="login"
                color="primary"
                name="login"
                onClick={() => this.handleClick()}
              >
                Login
              </Button>
              <Link
                style={{ marginLeft: 10, color: "red" }}
                onClick={this.handleRegister}
              >
                Register
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default Login;
