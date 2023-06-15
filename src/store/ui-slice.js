import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
    isShown: false
}

const UIReducer = createSlice({
    name:'ui',
    initialState:initialUIState,
    reducers:{
        toggleShow(state){
            state.isShown = !state.isShown;
        }
    }
});

export default UIReducer.reducer;

export const UIActions = UIReducer.actions;