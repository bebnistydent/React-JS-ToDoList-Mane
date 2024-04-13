
import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './components/todolist/Todolist';




//CRUD operations
//Create
//Run
//Update
//Delete

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    
    const TodolistTitle = "Band's concert have attended";
    
        //Global state
        const [tasks, setTasks] = useState<Array<TaskType>>([
            {id: 1, title: "Metallica", isDone: true},
            {id: 2, title: "Slayer", isDone: false},
            {id: 3, title: "Nirvana", isDone: false},
            
        ])
       

       const removeTask = (taskId: number) => {
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
    
   


    return (
        <div className="App">
            
            <Todolist 
                title= {TodolistTitle} 
                tasks={tasks} 
                removeTask={removeTask}
                

            />
            
        </div>
    );
}

export default App;
