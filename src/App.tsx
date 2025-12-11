import { useState } from "react";
import "./App.css";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskList from "./components/TaskList/TaskList";
import type { TaskStatus } from "./components/types";

function App() {
  //const [count, setCount] = useState(0);
  //change line 6 above //
  const [tasks,setTasks] = useState([
{
      id: "1",
      title: "Task 1",
      description: "Description 1",
      status: "pending",
      priority: "low",
      dueDate: "12/09/2025"

},
{
      id: "1",
      title: "Task 1",
      description: "Description 1",
      status: "pending",
      priority: "low",
      dueDate: "12/09/2025"

},
{
      id: "1",
      title: "Task 1",
      description: "Description 1",
      status: "pending",
      priority: "low",
      dueDate: "12/09/2025"

}

  ]);

  function onStatusChange(taskId: string, newStatus: TaskStatus){
    return;
  }
  function onDelete(taskId: string){
    return;

  }


  return (
    <>
      <TaskFilter />
      <TaskList 
      tasks={tasks}
      onStatusChange={onStatus Change}
      onDelete={onDelete}
      />
    </>
  )
}

export default App;
