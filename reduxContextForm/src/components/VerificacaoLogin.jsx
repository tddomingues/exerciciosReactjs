import { useSelector, useDispatch } from "react-redux";
import {loginUser, logoutUser} from "../redux/user/actions";

const VerificacaoLogin = () => {
  const user = useSelector((rootReducer) => rootReducer.userReducer);
  console.log(user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({name: "Tiago", email: "ttx@gmail.com"}));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h2>REDUX DO YOUTUBE</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default VerificacaoLogin;
