import React,{useState} from 'react'

const EditTodoform = ({editTodo, task}) => {
   const [value,setValue] = useState(task.task)

   const handleSubmit = e =>{
    e.preventDefault();
    editTodo(value, task.id);
    setValue("")
   }
  return (
    <form className='todo-form'onSubmit={handleSubmit}>
      <input type='text'className='todo-input'value={value} placeholder='update task'onChange={(e)=> setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>update Task</button>
    </form>
  )
}

export default EditTodoform

