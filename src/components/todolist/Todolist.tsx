  
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

  const taskList: Array<JSX.Element> = tasks.map(tasks => {
    
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
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
    </div>
</div>
  );
}