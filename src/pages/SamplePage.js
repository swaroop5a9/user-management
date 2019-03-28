import React from "react";
import Sample from "../components/sample";
// import UserDetails from "../components/UserDetails";
import { Card, CardContent, Grid, Paper } from "@material-ui/core";
import Header from "../components/home/Header";
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
        <Header />
        <Card>
          <CardContent>
            <Grid container spacing={24} style={styles.bodyFont}>
              <Grid item xs={12}>
                <Paper>
                  <Sample handleClick={this.handleClick} />
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const styles = {
  bodyFont: {
    fontFamily: 'calibri'
  }
}

export default SamplePage;
