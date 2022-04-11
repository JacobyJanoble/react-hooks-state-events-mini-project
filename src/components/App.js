import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

//////////////////////////////////////////////////

function App() {
  //     [get it, set it]
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')

  const addTask = (task) => {
    setTasks((tasks) => {
      return [...tasks, task]
    })
  }

  const deleteTask = (task) => {
    setTasks(tasks => {
      return tasks.filter(t => {
        return task !== t
      })
    })
  }


  const filteredTasks =
    category === "All"
      ? tasks : tasks.filter((task) => {
        return task.category == category;
      });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setCategory={setCategory} categories={CATEGORIES}/>
      <NewTaskForm addTask={addTask} categories={CATEGORIES.filter((cat) => cat !== "All")} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
