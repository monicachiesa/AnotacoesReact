import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState(""); //valores do input

  const handleInputChange = (e) => {
    setInputData(e.target.value); //pega o valor digitado no input
  };

const handleAddTaskClick = () => {
  handleTaskAddition(inputData)
}

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        type="text"
        className="add-task-input"
        value={inputData} 
      />
      
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
