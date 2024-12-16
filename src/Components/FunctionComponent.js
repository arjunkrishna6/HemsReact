import React from "react";
import Class_State from "../State_Props/Class_State";
import { useNavigate } from "react-router-dom";

function FunctionComponent() {
  const navigate = useNavigate();

  const homeNavigate = (navTo) => {
    navigate(navTo);
  };

  return (
    <>
      <p>This is the content from the functional component.</p>
      <Class_State text="Hi, this is the message from class props" />

      <button onClick={() => homeNavigate("/home")}>Home</button>
      <button onClick={() => homeNavigate("/register")}>Register</button>
    </>
  );
}

export default FunctionComponent;
