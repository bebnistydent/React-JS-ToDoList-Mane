import React from 'react';
import './App.css';
import { TaskType, Todolist } from './components/todolist/Todolist';




//CRUD operations
//Create
//Run
//Update
//Delete

function App() {


    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "JavaScript", isDone: false},
        {id: 3, title: "React", isDone: false},

    ]
    const tasks_2: Array<TaskType> = [
        {id: 1, title: "Metallica", isDone: true},
        {id: 2, title: "Slayer", isDone: true},
        {id: 3, title: "Nirvana", isDone: true},
        {id: 4, title: "Type0Negative", isDone: true},
    ];

    const tasks_3: Array<TaskType> = [
        {id: 1, title: "The catcher in the rye", isDone: true},
        {id: 2, title: "American Gods", isDone: false},
        {id: 3, title: "It", isDone: false},
    ]


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks_1} />
            <Todolist title="Band's concert to visit" tasks={tasks_2} />
            <Todolist title="Books to read" tasks={tasks_3} />
        </div>
    );
}

export default App;
