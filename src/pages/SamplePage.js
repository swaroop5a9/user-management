import React from "react";
import Sample from "../components/sample";
import UserDetails from "../components/UserDetails";
import { Card, CardContent, Grid, Paper } from "@material-ui/core";
class SamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }
  handleClick = item => {
    this.setState({
      item: item
    });
  };

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={8}>
                <Grid item>
                  <Paper>
                    <Sample handleClick={this.handleClick} />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper>
                    <UserDetails item={this.state.item} />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default SamplePage;
