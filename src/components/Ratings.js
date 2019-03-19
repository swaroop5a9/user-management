import React from "react";
import Heart from "mdi-material-ui/Heart";
import HeartOutline from "mdi-material-ui/HeartOutline";
class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: props.ratings
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      ratings: nextProps.ratings
    },()=>this.fillRating());
  }
  
  fillRating = () => {
    let children = [];
    for (let i = 0; i < this.state.ratings; i++) {
      children[i] = <Heart key={i} />;
    }
    if (children.length < 5) {
      for (let i = children.length; i < 5; i++)
        children[i] = <HeartOutline key={i} />;
    }
    this.setState({
      ratingHearts: children
    });
  };

  render() {
    return (
      <div>
        {this.state.ratingHearts}
      </div>
    );
  }
}

export default Ratings;
