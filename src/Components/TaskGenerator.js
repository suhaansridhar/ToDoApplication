import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
import {GrCheckbox} from 'react-icons/gr';

const TaskGenerator = ({taskName, id, removeTask}) => {
  return (
    <div className='task--generator--container'>
        <div className="task--generator--middle--container">
            <div>
                <div className="task--generator--container--checkbox"><button><GrCheckbox /></button></div>
                <h3>{taskName}</h3>
            </div>
            <button onClick={() => removeTask(id)} className='task--generator--delete--button'><AiFillDelete /></button>
        </div>
    </div>
  )
}

export default TaskGenerator
