import React from "react";
import data from "../people.json";
import {
  // Table,
  // TableHead,
  // TableCell,
  // TableBody,
  // TableRow,
  Grid
} from "@material-ui/core";
class sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  componentDidMount() {
    console.log(data);
  }

  handleClick = item => {
    this.props.handleClick(item);
  };

  render() {
    return (
      <div>
        <Grid container spacing={8} justify="center">
          {/* <Grid item xs={3}> */}
          {/* <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody> */}
          {data.People.map((item1, index) => (
            // <li
            //   style={styles.itemStyle}
            //   key={index}
            //   onClick={() => this.handleClick(item)}
            // >
            //   {item.name}
            // </li>
            // <TableRow key={index}>
            //   <TableCell>{item.name}</TableCell>
            //   <TableCell>{item.rating}</TableCell>
            //   <TableCell>{item.Description}</TableCell>
            // </TableRow>
            // <Grid container item xs={12} key={index}>
            <React.Fragment key={index}>
              <Grid  item xs={4}>
                {item1.name}
              </Grid>
              <Grid item xs={4}>
                {item1.rating}
              </Grid>
              <Grid item xs={4}>
                {item1.Description}
              </Grid>
              </React.Fragment>
            // </Grid>
          ))}
          {/* </TableBody>
            </Table> */}
          {/* </Grid> */}
        </Grid>
      </div>
    );
  }
}

const styles = {
  itemStyle: {
    listStyleType: "none"
  }
};

export default sample;
