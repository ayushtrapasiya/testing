
import { configureStore, createSlice } from "@reduxjs/toolkit";


let mainvalueslice = createSlice({
    name: "value",
    initialState: {
        inputvalue: {
            username: [],
            num: 0
        }
    },
    reducers: {
        Add: (state, action) => {
            state.inputvalue.username.push(action.payload)
        },
        Addnum: (state, action) => {
            state.inputvalue.num += Number(action.payload)
        }
    }
});


export const mainconfigurestore = configureStore({
    reducer: {
        value: mainvalueslice.reducer
    }
});

export const mainstore = mainvalueslice.actions;
