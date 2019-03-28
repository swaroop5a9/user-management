import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Link,
  Typography
} from "@material-ui/core";
class Register extends React.Component {
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
  handleRegister = () => {
    this.props.handleView("login");
    // this.setState({
    //   view:'register'
    // })
  };

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography color="textPrimary">Register Page</Typography>
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
            <TextField
                id="cpassword"
                name="cpassword"
                type="password"
                error={this.state.perror}
                label="Confirm Password"
                variant="outlined"
                onChange={this.handleChange}
              />
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
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default Register;
