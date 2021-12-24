import "./App.css";
import { useState } from "react";

function App() {
  const fakeTasks = ["Eat dinner", "do laundry", "Go to the gym"];
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTaskHandler = () => {
    // console.log("Clicked add task button");
    setTasks([task, ...tasks]);
    console.log(task);
    console.log(tasks);
  };

  return (
    <>
      <h2>🚀 TODO LIST 🚀</h2>
      <input
        type="text"
        style={{ outline: "none" }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={addTaskHandler}>Add task</button>
      {tasks.map((task) => (
        <p>🔵{task}</p>
      ))}
    </>
  );
}

export default App;
