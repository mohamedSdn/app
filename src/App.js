import { useState } from 'react';
import './App.css';
import Todos from './components/todos'

function App() {

  const [idCounter, incrementId] = useState(1);
  const [todoslist, setTodos] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const addTodo = () => {
    if(!title || !content || !date) {
      alert("please fill in all fields");
      return;
    }
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
      <h2 className="app-header">Todo Manager</h2>
      <div className="container">
        <div className="list">
          <Todos todolist = {todoslist} markAsDone= {markAsDone} deleteTodo = {deleteTodo}/>
        </div>
        <div className="form">
          <h3>Add a todo</h3>
          <input type="text" placeholder="set a title to your todo" 
                 value={title} onChange={e => setTitle(e.target.value)}/>
          <input type="text" placeholder="provide content here"
                 value={content} onChange={e => setContent(e.target.value)}/>
          <input type="date" placeholder="specify a deadline"
                 value={date} onChange={e => setDate(e.target.value)}/>
          <input type="button" value="Add todo" onClick={addTodo}/>
        </div>
      </div>
    </div>
  );

}

export default App;
