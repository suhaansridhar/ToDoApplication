import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
import {GrCheckbox} from 'react-icons/gr';

const TaskGenerator = ({taskName, id, removeTask}) => {
  return (
    <div className='task--generator--container'>
        <div className="task--generator--middle--container">
            <div>
                <GrCheckbox />
                <h3>{taskName}</h3>
            </div>
            <button onClick={() => removeTask(id)}><AiFillDelete /></button>
        </div>
    </div>
  )
}

export default TaskGenerator
