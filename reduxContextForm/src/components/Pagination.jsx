import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPosts } from "../redux/post/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const posts = useSelector((rootReducer) => rootReducer.postReducer);

  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);

  const handleNext = () => {

    setPage(page + 1);
  };

  const handlePrev = () => {

    setPage(page - 1);
  };

  return (
    <div>
      <h2>Paginação</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.id}</p>
        </div>
      ))}

      <button onClick={handlePrev} disabled={page === 1}>
        Anterior
      </button>
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default Pagination;
