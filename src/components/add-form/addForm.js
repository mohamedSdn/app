import { useState } from 'react';

const AddForm = ( { addTodo } ) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    const checkTodo = () => {
        if(!title || !content || !date) {
            alert("please fill in all fields");
            return;
        }
        addTodo(title, content, date);
    }

    return (
        <>
            <h3>Add a todo</h3>
            <input type="text" placeholder="set a title to your todo"
                   value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" placeholder="provide content here"
                   value={content} onChange={e => setContent(e.target.value)}/>
            <input type="date" placeholder="specify a deadline"
                   value={date} onChange={e => setDate(e.target.value)}/>
            <input type="button" value="Add todo" onClick={checkTodo}/>
        </>
    )
}

export default AddForm