import React from "react";
import { Card, CardContent, Grid, Avatar, Button } from "@material-ui/core";
import Heart from 'mdi-material-ui/Heart'
import HeartOutline from 'mdi-material-ui/HeartOutline'
import Ratings from "./Ratings";
class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      ratingHearts: []
    };
  }

  fillRating = () => {
    let children = []
    for (let i = 0; i < this.state.item.rating; i++) {
      children[i] = <Heart key={i} />
    }
    if (children.length < 5) {
      for (let i = children.length; i < 5; i++)
        children[i] = <HeartOutline key={i} />
    }
    this.setState({
      ratingHearts: children
    })
  }

  componentDidMount() {
    // console.log("componentDidMoun")
    this.fillRating()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      item: nextProps.item
    }, this.fillRating());
  }
  render() {
    return (
      <div>
        {this.state.item.name !== undefined &&
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={12} container>
                      <Grid item xs={3}><Avatar alt={this.state.item.name} src={this.state.item.img} /></Grid>
                      <Grid item xs={3}>
                        <Button size="small" variant="contained" style={styles.buttonClass}>Send Message</Button>
                        <Ratings ratings={this.state.item.rating} /></Grid>
                    </Grid>
                    <Grid item xs={12}>{this.state.item.Description}</Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={6} >
                  <Grid style={styles.itemStyleOdd}>Likes</Grid>
                  {this.state.item.Likes.map((item, index) => (
                    <Grid key={index} style={index % 2 === 0 ? styles.itemStyleEven : styles.itemStyleOdd}>  {item}  </Grid>
                  ))}
                </Grid>
                <Grid item xs={6} >
                  <Grid style={styles.itemStyleOdd}>DisLikes</Grid>
                  {this.state.item.Dislikes.map((item, index) => (
                    <Grid key={index} style={index % 2 === 0 ? styles.itemStyleEven : styles.itemStyleOdd}>  {item}  </Grid>
                  ))}</Grid>
              </Grid>
            </CardContent>
          </Card>
        }
      </div>
    );
  }
}

const styles = {
  itemStyleEven: {
    border: '1px solid #f0f0f5',
    backgroundColor: '#efe8d7',
    height: '30px'
  },
  itemStyleOdd: {
    border: '1px solid #f0f0f5',
    height: '30px'
  },
  squaresDiv: {
    height: '20px',
    border: '1px solid #f0f0f5	',
    padding: '20px 0px 40px 50px',
    cursor: 'pointer'

  },
  buttonClass: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '11px'
  }
};
export default UserDetails;
