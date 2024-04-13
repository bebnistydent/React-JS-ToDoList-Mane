  import {FilterValuesType} from "../../App"
  import React, { useState } from 'react';

type TodolistProopsTupe = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: number) => void
  
}

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}


export const Todolist = (props: TodolistProopsTupe) => {
  const {title, tasks, removeTask} = props
  

  //const tasks_list = tasks.map()
//Local State
const [filter,setFilter] = useState<FilterValuesType>("all") 


// This code is responsible for UI logic
const getTasksForTodoList = (allTasks: Array<TaskType>, 
nextFilterValue: FilterValuesType) => {
 switch (nextFilterValue) {
     case "active":
        return allTasks.filter(t => t.isDone === false);

     case "completed":
         return allTasks.filter(t => t.isDone === true);
 
     default:
         return allTasks;
 }

}

const tasksForTodoList = getTasksForTodoList(tasks, filter)


  const taskList: Array<JSX.Element> = tasksForTodoList.map(tasks => {
    
    const removeTaskHandler = () => removeTask(tasks.id)
    
    return (
      <li>
          <input type="checkbox" checked={tasks.isDone}/> 
          <span>{tasks.title}</span>
          <button onClick={removeTaskHandler}>X</button>
      </li>
     )
    })
  

  return (
    <div className="todolist">
    <h3>{title}</h3>
    <div>
        <input/>
        <button>+</button>
    </div>

    <ul>
      {taskList}
    </ul>
    
    <div>
        <button onClick={()=>setFilter("all")}>All</button>
        <button onClick={()=>setFilter("active")}>Active</button>
        <button onClick={()=>setFilter("completed")}>Completed</button>
    </div>
</div>
  );
}