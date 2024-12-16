import React, { Component } from "react";

class Class_State extends Component {
  constructor(props) {
    //this is how you get props from another component
    super(props);
    // this.increment = this.increment.bind(this);  --use this to bind "this keyword" in traditional function usage--(arrow ftn will automatically bind)
    this.state = {
      //state
      count: 1,
    };
  }

  increment = () => {
    const { count } = this.state;
    this.setState({
      //setState
      count: count + 1,
    });
  };

  render() {
    const { text } = this.props; //this is how you use the props value
    const { count } = this.state; //destructuring
    return (
      <div>
        <button onClick={this.increment}>Click me to increment!</button>
        <h1>{count}</h1>
        <h5>{text}</h5>
      </div>
    );
  }
}

export default Class_State;
