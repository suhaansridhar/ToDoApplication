import React from 'react'

const AddTask = ({addTask}) => {

    const [taskName, setTaskName] = React.useState('');

    function handleChange(event){
        setTaskName(event.target.value);
    }
  return (
    <div className='add--task--container'>
        <input type="text" value={taskName} onChange={handleChange}/>
        <button onClick={() => addTask(taskName)}>Add</button>
    </div>
  )
}

export default AddTask
