import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_STATUS } from "./actionTypes";

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo, todo: action.payload.todo
                        };
                    }
                    return todo;
                }),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case TOGGLE_STATUS:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo, status: !todo.status
                        };
                    }
                    return todo;
                }),
            };
        default:
            return state;
    }
};

export default reducer;