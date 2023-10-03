import { createContext, useState } from "react";

import PropTypes from "prop-types";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), name: task, checked: false }]);
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const checked = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, checked: !task.checked } : task;
      })
    );
  };

  return (
    <TaskContext.Provider value={{ addTask, tasks, deleteTask, checked }}>
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired, // Garante que 'children' seja passado como prop
};
