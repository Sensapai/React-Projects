import React, { useState, useEffect, FormEvent } from 'react'
import List from './components/List'
import Alert from './components/Alert'
import ListItem from './components/ListItem'

const LOCAL_STORAGE_KEY = 'todo-list';
const SUCCESS_TYPE = 'success';
const DANGER_TYPE = 'danger';

const getLocalStorage = () => {
  let storedList = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (storedList) {
    return JSON.parse(storedList)
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState<string>('')
  const [list, setList] = useState<ListItem[]>(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState('')
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))
  }, [list])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name) {
      showAlert(true, DANGER_TYPE, 'Please enter a task')
    } else if (name && isEditing) {
      setList(list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name }
        }
        return item
      }))
      setName('')
      setEditID('')
      setIsEditing(false)
      showAlert(true, SUCCESS_TYPE, 'item changed')

    } else {
      const newItem = { id: new Date().getTime().toString(), title: name, isCompleted: false }
      setList([...list, newItem])
      setName('')
      showAlert(true, SUCCESS_TYPE, 'Task added')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, msg, type });
  }

  const clearList = () => {
    setList([])
    showAlert(true, SUCCESS_TYPE, 'Todo list has been cleared')
  }

  const removeItem = (id: string) => {
    setList(list.filter((item) => item.id !== id))
    showAlert(true, SUCCESS_TYPE, 'Task has been removed')
  }

  const editItem = (id: string) => {
    const itemToEdit = list.find((item) => item.id === id)

    if (itemToEdit) {
      setIsEditing(true)
      setEditID(id)
      setName(itemToEdit.title)
    }
  }

  const toggleComplete = (id: string) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    )
  }

  return (
    <section className='section-center'>
      <form className="todo-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Todo App</h3>
        <div className="form-control">
          <input type="text" className='todo' placeholder='Add a task for today...' value={name} onChange={(e) => setName(e.target.value)} />
          <button type='submit' className='submit-btn'>{isEditing ? 'Edit' : 'Add'}</button>
        </div>
      </form>
      {list.length > 0 && !isEditing && (
        <div className="todo-container">
          <List items={list} removeItem={removeItem} editItem={editItem} toggleComplete={toggleComplete} />
          <button className="clear-btn" onClick={clearList}>Clear Todos</button>
        </div>
      )}
    </section>
  )
}

export default App