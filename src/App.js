import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClassComponent from "./Components/ClassComponent";
import FunctionComponent from "./Components/FunctionComponent";
import Home from "./Routing/Home";
import Register from "./Routing/Register";
import FormikLearning from "./Formik/FormikLearning";
import ReduxLearn from "./Redux/ReduxLearn";
import LifecycleMethods from "./LifecycleMethods/LifecycleMethods";
import LcmFtn from "./LifecycleMethods/LcmFtn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FunctionComponent />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formikLearning" element={<FormikLearning />} />
        <Route path="/redux" element={<ReduxLearn />} />
        <Route path="/lcm" element={<LifecycleMethods />} />
        <Route path="/lcmFtn" element={<LcmFtn />} />
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   const [appState, changeState] = useState("class");

//   return (
//     <div className="App">
//       {appState === "ftn" ? <FunctionComponent /> : <ClassComponent />}
//     </div>
//   );
// } --- this is conditional rendering of components...
