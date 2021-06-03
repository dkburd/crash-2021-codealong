import { useState } from "react";

// const tasks = [
//   {
//     title: "a",
//     text: "lala",
//   },
//   {
//     title: "b",
//     text: "twotwo",
//   },
// ];
const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      title: "a",
      text: "lala",
    },
    {
      title: "b",
      text: "twotwo",
    },
  ]);

  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.title}>{task.text}</h3>
      ))}
    </div>
  );
};

export default Tasks;
