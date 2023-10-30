
import { createSlice } from '@reduxjs/toolkit'

const intialState = {
    tasks: [],
    loader: false,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: intialState,
    reducers: {
        addTodoStart: (state, action) => {
            state.loader = true
        },
        addTodo: (state, action) => {
            state.tasks.push({ id_: Date.now(), ...action.payload })
            state.loader = false
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id_ !== action.payload)
        }
    }

});

export const { addTodo, deleteTodo, addTodoStart } = todoSlice.actions;

export default todoSlice.reducer;