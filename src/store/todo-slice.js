import { createSlice } from "@reduxjs/toolkit";

const initialToDoState = {
    todoList: [],
    isModified:false
}


const TodoReducer = createSlice({
    name:'todos',
    initialState:initialToDoState,
    reducers:{
        addTodo(state,action){
            const {title,description} = action.payload;
            state.todoList.push({
                id:Math.random(),
                title:title,
                description:description
            });
            state.isModified = true;
        },
        removeTodo(state,action){
            const todoID = action.payload;
            const existingTodo = state.todoList.find((item)=>item.id === todoID);
            if(existingTodo){
                state.todoList = state.todoList.filter((item) => item.id !== todoID);
            };
            state.isModified = true;
        },
        markAsDone(state,action){
            const todoID = action.payload;
            const existingTodo = state.todoList.find((item)=>item.id === todoID);
            if(existingTodo){
                existingTodo.status = true;
            }
            state.isModified = true;
        },
        replaceTodos(state,action){
            console.log("::::::",action.payload)
            state.todoList = action.payload || [];
        }
    }
});

export default TodoReducer.reducer;

export const ToDoActions = TodoReducer.actions;