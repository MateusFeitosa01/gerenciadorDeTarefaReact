import { useEffect, useState } from "react"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import {v4} from "uuid"
import Title from "./components/Title"

function App () {
  const [tasks, setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // useEffect(() =>{
  //   const fetchTasks = async() =>{
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: 'GET'
  //       }
  //     )
  //     const data = await response.json();
  //     setTask(data)
  //   }
  //   //SE QUISER PUXAR DA API
  //   // fetchTasks()
  // })

  function onTaskClick (taskId){
    const newTask = tasks.map((task) => {
      //presciso atualizar essa task
      if(task.id === taskId){
        return { ...task, isCompleted: !task.isCompleted };
      }
      //Não prescisa atualizar essa tarefa
      return task;
    });

    // atualiza o estado para disparar re-render
    setTask(newTask);
  }

  function onTaskDelete (taskId){
    const newTask = tasks.filter((task) =>{
      return task.id !== taskId;
    })

    setTask(newTask)
  }

  function onAddTask(title, description){
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTask([...tasks, newTask]);
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className='w-[500px] space-y-4'>
        <Title >Gerenciador de tarefas</Title>
        <AddTask onAddTask={onAddTask}/>
        <Tasks tasks ={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
      </div>
    </div>
  )
}

export default App