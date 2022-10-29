import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Redux/action'
import { useToasts } from 'react-toast-notifications';
function AddTodo() {
    const [input, setInput] = React.useState("")
    const dispatch = useDispatch()
    const { addToast } = useToasts();
    const todos = useSelector(state => state.todos)
    let id = 0;
    if (todos.length > 0) {
        id = todos[todos.length - 1].id + 1
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") {
            return addToast("Please enter a todo", { appearance: 'warning' });
        }

        let newTodo = {
            id,
            title: input,
            status: false,
        }

        dispatch(addTodo(newTodo))
        addToast("Todo added successfully", { appearance: 'success' });
        setInput("")
    }

    return (
        <div className='add-todo'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new todo..." />
                <button type="submit">Add Todo</button>
            </form>
        </div >
    )
}

export default AddTodo



