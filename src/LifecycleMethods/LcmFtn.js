import React, { useEffect, useState } from "react";

const LcmFtn = () => {
  const [stateVal, stChange] = useState("initValue");

  useEffect(() => {
    console.log("inside use effect");
    stChange("stateValChanged");
    return () => {
      console.log("unmount"); //this is equivalent to compWillUnmount - used rare
    };
  }, []);
  //[] indicates the dependencies which is eq to didMount if left empty and didUpdate if any state is given inside...
  // if you leave it empty useEffect is called only once, and called everytime
  // if the state value changes in the given dependency

  return (
    <>
      <p>{stateVal}</p>
    </>
  );
};

export default LcmFtn;
