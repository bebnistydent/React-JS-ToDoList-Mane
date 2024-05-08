
import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './components/todolist/Todolist';
import { v1 } from 'uuid';




//CRUD operations
//Create
//Run
//Update
//Delete

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    

    // Data
    //Business logic layer
    
    const TodolistTitle = "Band's concert have attended";
    
        //Global state
        const [tasks, setTasks] = useState<Array<TaskType>>([
            {id: v1(), title: "Metallica", isDone: true},
            {id: v1(), title: "Slayer", isDone: false},
            {id: v1(), title: "Nirvana", isDone: false},
            
        ])
       

       const removeTask = (taskId: string) => {
            //delited task from array
            //new Array
            //new version of state with changes
            // const newState = []
            // for (let i = 0; i < tasks.length; i++) {
            //     if (tasks[i].id !== taskId) {
            //         newState.push(tasks[i])
            //     } 
                
            // }



            const newState = tasks.filter((t)=> t.id !== taskId)

            setTasks(newState)

       }
   
       
       const addTask = (title: string) => {
            const newTask: TaskType = {
                id: v1(),
                title: title,
                isDone: false,
            }

            const nextTaskState = [newTask, ...tasks] /*Here you can you put [newTask, ...tasks] 
                                                        right into setTask. And delite this const*/
            setTasks(nextTaskState)
       };
   
  // UI Logic



    return (
        <div className="App">
            
            <Todolist 
                title= {TodolistTitle} 
                tasks={tasks} 
                removeTask={removeTask}
                addTask={addTask}
                

            />
            
        </div>
    );
}

export default App;
