import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClassComponent from "./Components/ClassComponent";
import FunctionComponent from "./Components/FunctionComponent";
import Home from "./Routing/Home";
import Register from "./Routing/Register";
import FormikLearning from "./Formik/FormikLearning";

function App() {
  return (
    <div className="App">
      {/* <ClassComponent />
      <FunctionComponent />
       */}
      <Routes>
        <Route path="/" element={<FunctionComponent />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formikLearning" element={<FormikLearning />} />
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
