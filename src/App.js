import Header from './components/Header.js';
import React from 'react'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask';
import { useState } from 'react'


const App=()=> {
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [tasks,setTasks]=useState([
    {   id:1,
        text:'bath',
        day:'friday 18th',
        reminder:true,
    }
    ,
    {   id:2,
        text:'eat',
        day:'sunday 12th',
        reminder:false,
    },
    {   id:3,
        text:'sleep',
        day:'saturday 3rd',
        reminder:false,
    },
  ])

  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
    // console.log(id);
  
  }
  const deleteTask =(id)=>{
    setTasks(tasks.filter((tasks)=>tasks.id!==id))
  }
  const addTask =(task)=>{
    // console.log(task)
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    setTasks([...tasks,newTask]) 
  }
  

  return (
    <div className="container">
      <Header onAd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
     
      {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} deleteTask={deleteTask} onToggle={toggleReminder}/>):('No task to show!')}
    </div>
  );
}

export default App;