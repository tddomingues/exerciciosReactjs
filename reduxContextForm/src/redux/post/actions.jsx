import PostActionTypes from "./action-types";

export const getPosts = (page) => {
  return async (dispatch) => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}`
    );
    const response = await data.json();
    dispatch({
      type: PostActionTypes.POST,
      payload: response,
    });
  };
};