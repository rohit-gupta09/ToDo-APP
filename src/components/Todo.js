import React,{useState} from 'react'

let globalId=0;

export default function Todo() {

    const [task,setTask]=useState("")
    const [todos,setTodos]=useState([])

    function createTodo(event){
        event.preventDefault()
        setTodos(oldTodos=>{
            setTask('')
            return [...oldTodos,{todo:task,id:globalId++}]
        })
    }

    function deleteItem(itemID)
    {
        setTodos(oldTodos=>oldTodos.filter(item => item.id !== itemID))
    }
    
  return (
    <div>
    <form onSubmit={createTodo}>
    <input type="text" className='my-3' value={task} onChange={event=>{
        setTask(event.target.value)
    }}></input>
        <button type="submit" onClick={createTodo} className='mx-3 btn btn-outline-success'>ADD ITEM</button>
    </form>
    <ul>
        {todos.map((item,index) => {
            return (
                <div className='my-3 scontainer justify-content-center d-flex'  key={item.id}>
                    <li>
                        <h4>{item.todo}</h4></li>
                        <button className='mx-2 btn btn-danger' onClick={()=>deleteItem(item.id)}>Delete</button>
                    
                </div>
            );
            
        })}
    </ul>
        
    </div>
  )
}
