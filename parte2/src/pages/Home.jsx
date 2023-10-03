import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>3 usuário</h2>
        <p>
          <Link to="/user/1">Usuário 1</Link>
        </p>
        <p>
          <Link to="/user/2">Usuário 2</Link>
        </p>
        <p>
          <Link to="/user/3">Usuário 3</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
