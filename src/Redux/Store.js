import { createStore } from "redux";
import Reducer from "./Reducer";

const storeValue = createStore(Reducer)

export default storeValue