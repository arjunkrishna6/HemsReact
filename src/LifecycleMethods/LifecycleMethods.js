import React, { Component } from "react";

class LifecycleMethods extends Component {
  constructor() {
    super();
    this.state = {
      text: "hello",
    };
    console.log("inside constructor");
  }

  componentDidMount() { //try to avoid changing the state twice, becoz React batches it together and re-renders only once and not for every state change.
    this.setState({ text: "insideDidMount" });
    console.log("insideDidMount");
  }

  componentDidUpdate(prevProps, prevState){ //calls every time the state is changed
    console.log("insideDidUpdate", prevState);
  }

  componentWillUnmount(){
    console.log("insideWillUnmount");
  }

  justFtn = () => {
    this.setState({ text: "changed" });
  };

  render() {
    console.log(this.state.text, "inside the render");
    return (
      <>
        <button onClick={() => this.justFtn()}>OruPeruVeiyu</button>
        <p>{this.state.text}</p>
      </>
    );
  }
}

export default LifecycleMethods;

//constructor - render - componentDidMount - componentDidUpdate - componentWillUnmount
