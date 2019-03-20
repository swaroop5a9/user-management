import React from "react";
import data from "../people.json";
import { Grid } from "@material-ui/core";
import MenuRight from 'mdi-material-ui/MenuRight'
import Magnify from 'mdi-material-ui/Magnify'
import UserDetails from "./UserDetails.js";
class sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      people: data.People
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

  handleChange = (event) => {
    let list = data.People
    let currentList = []
    let newList = []
    if (event.target.value !== "") {
      currentList = list;
      newList = currentList.filter(item => {
        const filter = event.target.value.toLowerCase();
        return (item.name.toLowerCase()).includes(filter);
      });
    } else {
      newList = list;
    }
    this.setState({
      people: newList
    })
  }

  render() {
    return (
      <div>
        <Grid container spacing={24} justify="center">
          <Grid container spacing={16} item xs={2}>
            <div>
              <Magnify style={styles.searchIconCss} />
              <input type="text" style={styles.searchCss} placeholder="search" onChange={this.handleChange}></input>
            </div>
            <Grid container item xs={12}>
              {this.state.people.map((listItem, index) => (
                <Grid item xs={12} onClick={() => this.handleClick(listItem)} key={index} style={styles.squaresDiv}>
                  <span>{listItem.name}</span>
                  <span style={{ float: "right" }}><MenuRight /></span>
                </Grid>
              ))}
            </Grid>
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
  squaresDiv: {
    height: '35px',
    border: '1px solid #f0f0f5',
    padding: '20px 0px 40px 50px',
    marginLeft: '20px',
    cursor: 'pointer'
  },
  searchCss: {
    border: '1px solid #f0f0f5',
    borderRadius: '25px',
    marginLeft: '25px',
    height: '30px',
    fontSize: '15px',
    textIndent: '25px',
    // padding: '20px 0px 0px 20px',
  },
  searchIconCss: {
    fontSize: '20px',
    paddingLeft: '30px',
    paddingTop: '9px',
    position: 'absolute'
  }
};

export default sample;
