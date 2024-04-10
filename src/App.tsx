
import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './components/todolist/Todolist';




//CRUD operations
//Create
//Run
//Update
//Delete

function App() {

    
    const TodolistTitle = "Band's concert to visit";
    



    
    

        const [tasks, setTasks] = useState<Array<TaskType>>([
            {id: 1, title: "Metallica", isDone: true},
            {id: 2, title: "Slayer", isDone: true},
            {id: 3, title: "Nirvana", isDone: true},
            
        ])
       

       const removeTask = (taskId: number) => {
            //delited task frim array
            //new Array
            setTasks([
            {id: 1, title: "Metallica", isDone: true},
            {id: 2, title: "Slayer", isDone: true},
            {id: 3, title: "Nirvana", isDone: true},
            
        ])

       }
   


    return (
        <div className="App">
            
            <Todolist title= {TodolistTitle} tasks={tasks} />
            
        </div>
    );
}

export default App;
