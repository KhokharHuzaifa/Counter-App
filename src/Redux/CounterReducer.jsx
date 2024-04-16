import { createSlice } from "@reduxjs/toolkit";

// Creating a sli
export const CounterSlice = createSlice({
    name:'Counter',
    initialState:{
        value:0
    },
    reducers: {
        Increment: (state)=>{
            state.value++;
        },
        Decrement: (state)=>{
            state.value--;
        }
    }
})
// exporting actions
export const {Increment,Decrement} = CounterSlice.actions
