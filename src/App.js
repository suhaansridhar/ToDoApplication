import React from 'react';
import { useState } from 'react';
import {nanoid} from 'nanoid';

const App = () => {
  const [tasksArray, setTasksArray] = useState([{id: nanoid(), task: 'Brushing'}]);
  const [task, setTask] = useState('')

  function deleteTask(id){
    setTasksArray(tasksArray.map(item => item.id !== id ));
  }
  function add(){
    if(task.length === 0){
      alert('cant add');
    }else{
    let id= nanoid();
    let tempArray = {id, task};
    setTasksArray(Array => [...Array, tempArray]);
    setTask('') }
  }

  return (
    <div>
    <input type="text" value={task} onChange={(event) => setTask(event.target.value)}/>
    <button onClick={add}>Add</button>  
    {tasksArray.map(item => {
        return(
          <li key={item.id}>{item.task}<button onClick={() => deleteTask(item.id)}>DEL</button></li>
        )
      })}
    </div>
  )
}

export default App
