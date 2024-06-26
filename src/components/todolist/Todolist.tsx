  import {FilterValuesType} from "../../App"
  import React, { KeyboardEvent, useState } from 'react';
import { Button } from "./Button";

type TodolistProopsTupe = {
  title: string
  tasks: Array<TaskType>
  addTask: (title: string) => void
  removeTask: (taskId: string) => void
  
}

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}


export const Todolist = (props: TodolistProopsTupe) => {
  const {title, tasks, addTask, removeTask} = props
  

  //const tasks_list = tasks.map()
//Local State
const [filter,setFilter] = useState<FilterValuesType>("all")
const [taskTItle, setTaskTitle] = useState("") 

console.log(taskTItle);



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



const addTaskHandler = () => {
    addTask(taskTItle)
    setTaskTitle("")
}

const addTaskOnKeyUpHandler = taskTItle.length === 0 
? undefined 
:(e : KeyboardEvent<HTMLInputElement>) => {
  if(e.key === "Enter") {
    addTaskHandler()
  }
 }

  const taskList: Array<JSX.Element> = tasksForTodoList.map(tasks => {
    
    const removeTaskHandler = () => removeTask(tasks.id)
    
    return (
      <li key={tasks.id}> 
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
        <input value={taskTItle}
               onChange={(e)=> setTaskTitle(e.currentTarget.value)}
               onKeyUp={addTaskOnKeyUpHandler} 
        />  

        <Button title = "+"
                onClickHandler={addTaskHandler}
                disabled = {taskTItle.length === 0 || taskTItle.length > 30}/>

                {taskTItle.length > 15 && <div>Too many characters</div>}
        
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