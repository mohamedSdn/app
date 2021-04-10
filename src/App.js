import { useState } from 'react';
import './App.css';
import Todos from './components/todo/todos'
import AddForm from './components/add-form/addForm'

function App() {

  const [idCounter, incrementId] = useState(1);
  const [todoslist, setTodos] = useState([]);

  const addTodo = (title, content, date) => {
    let todo = {
      id: idCounter,
      title: title,
      content: content,
      deadline: date,
      done: false
    };
    incrementId(idCounter + 1)
    setTodos([...todoslist, todo]);
  }

  const markAsDone = (id) => {
    setTodos(todoslist.map(ele => ele.id === id ? {...ele, done: true} : ele));
  }

  const deleteTodo = (id) => {
    console.log(id);
    setTodos(todoslist.filter(ele => ele.id !== id));
  }

  return (
    <div className="App">
      <header>
        <h2>Todo Manager</h2>
      </header>
      <div className="container">
        <div className="list">
          <Todos todolist = {todoslist} markAsDone= {markAsDone} deleteTodo = {deleteTodo}/>
        </div>
        <div className="form">
          <AddForm addTodo = {addTodo}></AddForm>
        </div>
      </div>
    </div>
  );

}

export default App;
