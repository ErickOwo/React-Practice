import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"

const TaskForm = ({ onSubmit })=>{

  const [input, setInput] = useState("");
  
  const sentHandler = e =>{
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    };
    onSubmit(newTask);
  };

  const changeHandler = e =>{
    setInput(e.target.value);
  };
  
  return(
    <form 
      className="task-form"
      onSubmit={sentHandler}
    >
      <input 
        className="task-input"
        type="text"
        placeholder="Escribe una tarea"
        name="text"
        onChange={changeHandler}
      />
      <button className="task-button">
        Agregar Tarea
      </button>
    </form>
  );
};

export default TaskForm;