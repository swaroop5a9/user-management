import React from "react";
class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      item: nextProps.item
    });
  }
  render() {
    return (
      <div>
        <span>{this.state.item.name}</span>
      </div>
    );
  }
}
export default UserDetails;
