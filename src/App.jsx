import { useState } from 'react';
import "./style.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem("")
  }


  function toggleTodo (id, completed) {
        setTodos(currentTodos =>
        {
          return currentTodos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed}
            }

            return todo
          })
        })
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit} className="new-item-form form">
          <div className="form-item">
            <label htmlFor="item">Enter</label>
            <input 
              value={newItem}
              onChange={e => setNewItem(e.target.value)} 
              type="text" 
              id="item" 
            />
          </div>
          <button className="btn">Submit</button>
        </form>
        <h3>Submitted Items:</h3>
        <div className="itemcheck">
          {todos.map(todo => (
            <div key={todo.id} className="item1">
              <input 
                type="checkbox" 
                id={todo.id} 
                checked={todo.completed} 
                onChange={e => toggleTodo (todo.id, e.target.checked)}
              />
              <label htmlFor={todo.id}>{todo.title}</label>
              <button className="btn btn-danger">Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}