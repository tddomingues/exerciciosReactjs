import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const List = () => {
  const { tasks, deleteTask, checked } = useContext(TaskContext);
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={
            task.checked
              ? { backgroundColor: "red" }
              : { backgroundColor: "#fff" }
          }
        >
          <p>
            {task.name} / {task.id}
          </p>
          <button onClick={() => deleteTask(task.id)}>Deletar</button>
          <button onClick={() => checked(task.id)}>Marcar</button>
        </div>
      ))}
    </div>
  );
};

export default List;
