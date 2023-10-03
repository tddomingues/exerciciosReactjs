import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import postReducer from "./post/reducer";

//rootReducer através do combineReducers irá armazenar todos os reducers
const rootReducer = combineReducers({
  userReducer,
  postReducer,
});

export default rootReducer;
