import React, { Component } from "react";
import { context } from "../ContextApi/ContextApi";

class Home extends Component {
  render() {
    return (
      <context.Consumer>
        {(value) => (
          <>
            <h2>Welcome to Home!!!</h2> <p>{value.exState.firstState}</p>
          </>
        )}
      </context.Consumer>
    );
  }
}

export default Home;

// this is how you should use contextApi in class component,
// everything must be wrapped within value if you use context.
