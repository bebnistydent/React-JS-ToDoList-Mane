
import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './components/todolist/Todolist';




//CRUD operations
//Create
//Run
//Update
//Delete

type FilterValuesType = "all" | "active" | "completed"

function App() {

    
    const TodolistTitle = "Band's concert have attended";
    

        const [tasks, setTasks] = useState<Array<TaskType>>([
            {id: 1, title: "Metallica", isDone: false},
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

       const [filter,setFilter] = useState<FilterValuesType>("active") 

    
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
   


    return (
        <div className="App">
            
            <Todolist 
                title= {TodolistTitle} 
                tasks={tasksForTodoList} 
                removeTask={removeTask}

            />
            
        </div>
    );
}

export default App;
