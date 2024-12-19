import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { testAction } from "./Actions";

const ReduxLearn = () => {
  const selector = useSelector((state) => state.hems);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(testAction())}>State change</button>
      <p>{selector}</p>
    </>
  );
};

export default ReduxLearn;

// useSelector - reducer ooda state value ah access pandradhukaaga
// useDispactch - actions ooda method ah access pandradhukaaga
