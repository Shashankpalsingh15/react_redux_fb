import { combineReducers } from "redux";
import { authReducer } from "./Reducer/authReducer";
import { detailReducer } from "./Reducer/detailReducer";
export default combineReducers({
  authReducer,
  detailReducer,
});
