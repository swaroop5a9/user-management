import React from "react";
import Sample from "../components/sample";
import UserDetails from "../components/UserDetails";
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
        <Sample handleClick={this.handleClick} />
        <UserDetails item={this.state.item} />
      </div>
    );
  }
}

export default SamplePage;
