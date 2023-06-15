import { configureStore } from "@reduxjs/toolkit";
import UIReducer from './ui-slice';
import TodoReducer from './todo-slice';
 
const store = configureStore({
    reducer:{
        ui:UIReducer,
        todos:TodoReducer,
    }
});

export default store;