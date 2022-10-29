import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo, toggleStatus } from '../Redux/action'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdModeEdit } from 'react-icons/md'
function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleDelete = (id, status) => {
        if (status) {
            if (window.confirm("Are you sure you want to delete this todo?")) {
                dispatch(deleteTodo(id))
            }
        }
    }

    const handleEdit = (id) => {
        let newTodo = prompt("Edit Todo")
        if (newTodo != "") {
            dispatch(editTodo({
                id,
                todo: {
                    title: newTodo,
                }
            }))
        }
    }


    return (
        <div className='todo-list'>
            {todos.map((todo, idx) => {
                return (
                    <div className='todo' key={idx}>
                        <div>
                            <input type="checkbox" checked={todo.status} onChange={() => dispatch(toggleStatus(todo.id))} />
                            <p className='todo-title' style={{ textDecoration: todo.status ? "line-through" : "none" }}>{todo.title}</p>
                        </div>
                        <div className='todo-btns'>
                            <MdModeEdit onClick={() => handleEdit(todo.id)} style={{ color: "rgb(0, 84, 200)", marginRight: "8px" }} />
                            <RiDeleteBin6Line onClick={() => handleDelete(todo.id, todo.status)} style={!todo.status ? { color: "rgba(255, 0, 0, 0.568)", cursor: "not-allowed" } : {}} disabled />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default TodoList
