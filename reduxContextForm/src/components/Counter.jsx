import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../context/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Usando o REDUX</h1>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Zerar</button>
      </div>
    </div>
  );
};

export default Counter;
