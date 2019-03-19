import React from "react";
import data from "../people.json";
import { Grid } from "@material-ui/core";
import MenuRight from 'mdi-material-ui/MenuRight'
import UserDetails from "./UserDetails.js";
class sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    // console.log(data);
  }

  handleClick = item => {
    this.setState({
      item: item
    })
  };

  render() {
    return (
      <div>
        <Grid container spacing={24} justify="center">
          <Grid item xs={2}>
            {data.People.map((listItem, index) => (
              <Grid item xs={12} onClick={() => this.handleClick(listItem)} key={index} style={styles.squaresDiv}>
                <span>{listItem.name}</span>
                <span style={{ float: "right" }}><MenuRight /></span>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={10}>
            {this.state.item.name !== undefined && <UserDetails item={this.state.item} />}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  itemStyle: {
    listStyleType: "none"
  },
  squaresDiv: {
    height: '35px',
    border: '1px solid #f0f0f5',
    padding: '20px 0px 40px 50px',
    marginLeft: '20px',
    cursor: 'pointer'

  }
};

export default sample;
