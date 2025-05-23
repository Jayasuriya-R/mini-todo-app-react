import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faPenToSquare} from'@fortawesome/free-solid-svg-icons'
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <FontAwesomeIcon
           icon={faCheck}
           onClick={() => toggleComplete(task.id)}
           className={`${task.completed ? "completed" : "incompleted"}`}
      />
         <p>{task.task}</p>
    
      <div>
        <FontAwesomeIcon icon ={faPenToSquare} onClick={()=>
            editTodo(task.id)
        }/>
        <FontAwesomeIcon icon ={faTrash} onClick={()=>
            deleteTodo(task.id)
        }/>
      </div>
    </div>
  )
}

export default Todo
