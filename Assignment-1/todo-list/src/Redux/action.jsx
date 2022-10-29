import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_STATUS } from "./actionTypes";


export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
}

export const editTodo = (data) => {
    return {
        type: EDIT_TODO,
        payload: data,
    };
}

export const toggleStatus = (id) => {
    return {
        type: TOGGLE_STATUS,
        payload: id,
    };
};
