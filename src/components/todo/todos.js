import './todos.css'

const Todos = ( { todolist, markAsDone, deleteTodo } ) => {
    return (
        <>
            <table>
                <thead>
                    <tr className="table-row table-header">
                        <th>title</th>
                        <th>content</th>
                        <th>deadline</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todolist.map(element => {
                        return (
                            <tr className="table-row body-row" key={element.id}>
                                <td className = {element.done ? "todo-done" : ""}> {element.title} </td>
                                <td> {element.content} </td>
                                <td> {element.deadline} </td>
                                <td>
                                    { !element.done && <button onClick={ () => markAsDone(element.id) }>Done</button>}
                                    <button onClick={ () => deleteTodo(element.id) }>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Todos;