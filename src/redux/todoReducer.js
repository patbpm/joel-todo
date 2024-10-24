import { createSlice } from "@reduxjs/toolkit";

// Initial state for todos
const initialState = {
    list: [
      { id: 1, content: 'Je reste avec Ben', completed: false },
      { id: 2, content: 'Content2', completed: false },
    ],
    counter: 2
  };

  const todoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            state.counter = state.counter + 1
            state.list.push({ id: state.counter, content: action.payload, completed: false });
        },
        deleteTodo: (state, action) => {
            state.counter = state.counter - 1
            state.list = state.list.filter(todo => todo.id !== action.payload)
        },

        editTodo: (state, action) => {
           const {id, content} =  action.payload;
           const todo = state.list.find(todo => todo.id === id)
           if(todo){
             todo.content = content
           }
        },
        completeTodo: (state, action) => {
            const {id, content} =  action.payload;
            const todo = state.list.find(todo => todo.id === id) 
            if(todo){
                todo.completed = !todo.completed
            }
        }
    }

  });

  export const {addTodo, deleteTodo, editTodo, completeTodo} = todoReducer.actions;
  export default todoReducer.reducer;
