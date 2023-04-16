import React from 'react';
import TaskGenerator from './TaskGenerator';

const TaskList = ({taskList, removeTask}) => {
    let arrayOfTasks = taskList.map(item => <TaskGenerator taskName = {item.taskName} key={item.id} id={item.id} removeTask={removeTask}/>)
  return (
    <div>
        {arrayOfTasks}
    </div>
  )
}

export default TaskList
