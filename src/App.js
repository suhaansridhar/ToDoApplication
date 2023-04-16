import React from "react";
import TaskGenerator from "./Components/TaskGenerator";
import {nanoid} from 'nanoid';
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = React.useState([
    {id: nanoid(), taskName: 'Brushing'}, 
  ]);

  function removeTask(id){
    console.log(id)
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

  return (
    <div className="Main--Container">
      <AddTask addTask = {addTask}/>
      <TaskList taskList={tasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
