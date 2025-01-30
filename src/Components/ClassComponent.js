import React, { Component } from "react";
import "./ClassComponent.css";
import Function_State from "../State_Props/Function_State";
import { Link } from "react-router-dom";

class ClassComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      message: "Hi, this is the message from Props",
    };
  }

  // this.props.history.push("/home"); --- this is the syntax
  // <Navigate to="/home" /> --- this is the syntax while using Navigate

  render() {
    const { message } = this.state;
    return (
      <>
        <div id="header">
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/register">
            <button>About</button>
          </Link>
          <Link to="/register">
            <button>About</button>
          </Link>
          <div id="firstDiv">My Food</div>
          <div id="secondDiv">
            <a href="./Registration.html">
              <button>Register</button>
            </a>
          </div>
        </div>
        <div id="contentDiv">
          <div id="pics">
            <div id="imgDiv">
              <img src={require("../images/first.png")} />
              <p id="desc">The Perfect Sandwich, A Real NYC Classic</p>
              <p>
                Just some random text, lorem ipsum text praesent tincidunt ipsum
                lipsum
              </p>
            </div>
            <div id="imgDiv">
              <img src={require("../images/second.png")} />
              <p id="desc">The Perfect Sandwich, A Real NYC Classic</p>
              <p>
                Just some random text, lorem ipsum text praesent tincidunt ipsum
                lipsum
              </p>
            </div>
            <div id="imgDiv">
              <img src={require("../images/third.png")} />
              <p id="desc">The Perfect Sandwich, A Real NYC Classic</p>
              <p>
                Just some random text, lorem ipsum text praesent tincidunt ipsum
                lipsum
              </p>
            </div>
            <div id="imgDiv">
              <img src={require("../images/fourth.png")} />
              <p id="desc">The Perfect Sandwich, A Real NYC Classic</p>
              <p>
                Just some random text, lorem ipsum text praesent tincidunt ipsum
                lipsum
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div id="aboutDiv">About Me, The Food Man</div>
        <div id="imgDiv">
          <img src={require("../images/about.png")} />
        </div>
        <div id="aboutDesc1">I am Who I Am!</div>
        <div id="aboutDesc2">With Passion For Real, Good Food</div>
        <div id="aboutDesc3">
          Just me, myself and I, exploring the universe of unknownment. I have a
          heart of love and an interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you. Praesent tincidunt sed tellus
          ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
          rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla.
        </div>
        <hr />
        <Function_State message={message} />{" "}
        {/*this is how you send props, you can send both normal texts as well as from state which is common */}
      </>
    );
  }
}

export default ClassComponent;
