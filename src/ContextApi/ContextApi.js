import React, { createContext, useState } from "react";

export const context = createContext();
const ContextApi = ({ children }) => {
  const [exState, changeState] = useState({
    firstState: "idhaandastatevalue",
    secondState: "newStateTest",
  });

  const stFunction = (key, value) => {
    changeState((prevState) => ({
      ...prevState /* to hold rest of the state values we use spread operator here */,
      [key]: value,
      secondState: "defaultChange",
    }));
  };
  return (
    <>
      <context.Provider value={{ exState, stFunction }}>
        {children}
      </context.Provider>
    </>
  );
};

export default ContextApi;

// import React, { Component, createContext } from "react";

// export const context = createContext();
// class ContextApi extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       firstState: "idhaandastatevalue",
//       secondState: "newStateTest",
//     };
//   }

//   stFunction = (key, value) => {
//     this.setState({
//       ...this.state,
//       [key]: value,
//     });
//   };

//   render() {
//     return (
//       <>
//         <context.Provider value={{ state: this.state, ftn: this.stFunction }}>
//           {this.props.children}
//         </context.Provider>
//       </>
//     );
//   }
// }

// export default ContextApi;
// the second set of code is creating context using class component.
