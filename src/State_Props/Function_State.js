import React, { useState } from "react";

const Function_State = (props) => { //this is how you can access props in functional component
  const [light_state, setLight] = useState("on"); //syntax: [stateName, setChangeFtnName] = useState - hook, "on" - initial value for the state

  const lightChange = () => {
    if (light_state === "on") {
      setLight("off");
    } else {
      setLight("on");
    }
  };

  const { message } = props; //destructuring
  return (
    <div>
      {light_state === "on"
        ? "The light is turned on"
        : "The light is turned off"}
      <button onClick={lightChange}>
        {light_state === "on" ? "Off" : "On"}
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Function_State;
