import React, {useState} from "react";
import Task from "@components/Task";
import TaskForm from "@components/Form";

const ContainerTasks = ()=>{

  const [tasks, setTasks] = useState([]);
  
  const addTask = taskAdded =>{
    taskAdded.text = taskAdded.text.trim();

    if(taskAdded.text){
      const actualizedTasks = [taskAdded, ...tasks];
      setTasks(actualizedTasks);
    }
  };

  const deleteTask = id =>{
    const actualizedTasks = tasks.filter(task => task.id !== id);
    setTasks(actualizedTasks);
  };

  const completeTask = id =>{
    const actualizedTasks = tasks.map(task=>{
      if (task.id === id){
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(actualizedTasks);
  };

  return(
    <div className="container-tasks">
      <div className="principal-list">
        <h2 className="title-tasks">Mis Tareas</h2>
        <TaskForm
          onSubmit= {addTask}
        />
        <div className="app-tasks">
          {
            tasks.map((task)=>
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                complete={task.complete}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ContainerTasks;