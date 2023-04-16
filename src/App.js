import React from "react";
import TaskGenerator from "./Components/TaskGenerator";
import {nanoid} from 'nanoid';

function App() {
  const [tasks, setTasks] = React.useState([{id: nanoid(), taskName: 'Brushing'}]);

  let arrayOfTasks = tasks.map(item => <TaskGenerator taskName = {item.taskName} key={item.id}/>)

  return (
    <div className="Main--Container">
      {arrayOfTasks}
    </div>
  );
}

export default App;
