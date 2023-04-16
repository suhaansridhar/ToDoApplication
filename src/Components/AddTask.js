import React from 'react'

const AddTask = ({addTask}) => {

    const [taskName, setTaskName] = React.useState('');

    function handleChange(event){
        setTaskName(event.target.value);
    }

    function clicked(){
      addTask(taskName);
      setTaskName('');
    }
  return (
    <div className='add--task--container'>
        <input type="text" value={taskName} onChange={handleChange}
        placeholder='Enter the task'/>
        <button onClick={clicked}>Add</button>
    </div>
  )
}

export default AddTask
