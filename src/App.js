import React from "react";
import TaskGenerator from "./Components/TaskGenerator";
import {nanoid} from 'nanoid';
import AddTask from "./Components/AddTask";

function App() {
  const [tasks, setTasks] = React.useState([
    {id: nanoid(), taskName: 'Brushing'}, 
    {id: nanoid(), taskName: 'Cooking'}
  ]);

  function removeTask(id){
    let tempArray = tasks.map(item => item.id !== id);
    setTasks(tempArray);
}

function addTask(content){
  let tempId = nanoid();
  const tempObj = {
    id: tempId,
    taskName: content
  }
  setTasks(prevArray => [...prevArray, tempObj]);
}

  let arrayOfTasks = tasks.map(item => <TaskGenerator taskName = {item.taskName} key={item.id} id={item.id} removeTask={removeTask}/>)

  return (
    <div className="Main--Container">
      <AddTask addTask = {addTask}/>
      {arrayOfTasks}
    </div>
  );
}

export default App;
