
type TodolistProopsTupe = {
  title: string
  tasks: Array<TaskType>
}

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}


export const Todolist = (props: TodolistProopsTupe) => {
  const {title, tasks} = props
  

  //const tasks_list = tasks.map()

  const taskList: Array<JSX.Element> = [] //I have no clue what "JSX.Elevent" is. Yet
  for (let i = 0; i < tasks.length; i++) {
    taskList.push (
      <li><input type="checkbox" checked={tasks[i].isDone}/> 
          <span>{tasks[i].title}</span>
      </li>
    )
  }

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