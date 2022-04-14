import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai"

const Task = ({ id ,text, complete, completeTask, deleteTask })=>{
  return(
    <div className={complete ? "task-content complete" : "task-content"}>
      <div 
        className="task-text"
        onClick={()=> completeTask(id)}
      >
        {text}
      </div>
      <div 
        className="task-content-icons"
        onClick={()=> deleteTask(id)}
      >
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
};

export default Task;