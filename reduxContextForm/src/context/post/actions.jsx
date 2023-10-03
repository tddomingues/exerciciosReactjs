// export const getPosts = (page) => async (dispatch) => {
//   try {
//     const data = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?_page=${page}`
//     );
//     const response = await data.json();
//     dispatch({
//       type: "GET_POSTS",
//       payload: response,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
