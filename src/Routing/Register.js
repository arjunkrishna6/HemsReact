import React, { useContext } from "react";
import { context } from "../ContextApi/ContextApi";

const Register = () => {
  const contextValue = useContext(context);
  console.log(contextValue.exState);
  return (
    <div>
      <h2>Welcome to Registration!!!</h2>
      <button
        onClick={() => contextValue.stFunction("firstState", "ftnChange")}
      >
        Click mee
      </button>
      <button onClick={contextValue.stFunction}>Direct Change</button>
      <p>{contextValue.exState.firstState}</p>
      <p>{contextValue.exState.secondState}</p>
    </div>
  );
};

export default Register;
