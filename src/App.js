import React from "react";
import TaskGenerator from "./Components/TaskGenerator";
import {nanoid} from 'nanoid';
import AddTask from "./Components/AddTask";

function App() {
  const [tasks, setTasks] = React.useState([{id: nanoid(), taskName: 'Brushing'}]);

  function removeTask(id){
    const tempArray = tasks.map(item => item.id !== id);
    setTasks(tempArray);
}

  let arrayOfTasks = tasks.map(item => <TaskGenerator taskName = {item.taskName} key={item.id} id={item.id} removeTask={removeTask}/>)

  return (
    <div className="Main--Container">
      <AddTask />
      {arrayOfTasks}
    </div>
  );
}

export default App;
