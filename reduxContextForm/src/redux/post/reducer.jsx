import PostActionTypes from "./action-types";

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostActionTypes.POST:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
