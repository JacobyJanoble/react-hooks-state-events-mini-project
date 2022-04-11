import React from "react";
import Task from "./Task"

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {
        tasks.map((task, indx) => {
          return (
          <Task
          key={indx}
          {...task}
          deleteTask={() => {
            deleteTask(task)
          }}
          />
          )
        })
      }
    </div>
  );
}

export default TaskList;
