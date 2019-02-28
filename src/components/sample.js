import React from "react";
import data from "../people.json";
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
        {data.People.map((item, index) => (
          <li key={index} onClick={() => this.handleClick(item)}>
            {item.name}
          </li>
        ))}
      </div>
    );
  }
}

export default sample;
