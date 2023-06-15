import { createSlice } from "@reduxjs/toolkit";

const initialToDoState = {
    todoList: [
        {
            id:1,
            title:'clean room',
            description:'do like this',
            status:true
        },
        {
            id:2,
            title:'learn react',
            description:'follow course',
            status:false
        }
    ]

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
            })
        },
        removeTodo(state,action){
            const todoID = action.payload;
            const existingTodo = state.todoList.find((item)=>item.id === todoID);
            if(existingTodo){
                state.todoList = state.todoList.filter((item) => item.id !== todoID);
            }
        },
        markAsDone(state,action){
            const todoID = action.payload;
            const existingTodo = state.todoList.find((item)=>item.id === todoID);
            if(existingTodo){
                existingTodo.status = true;
            }
        },
        replaceTodos(){

        }
    }
});

export default TodoReducer.reducer;

export const ToDoActions = TodoReducer.actions;