import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Form = () => {
  const [task, setTask] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
  };
  return (
    <div>
      <h2>TO-DO LIST</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <p>DIGITE SUA TAREFA</p>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
        </label>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
