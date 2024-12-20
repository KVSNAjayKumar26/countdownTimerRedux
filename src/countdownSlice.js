import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    time: 0, // total seconds
    isRunning: false,
};

const countdownSlice = createSlice({
    name: 'countdown',
    initialState,
    reducers: {
        setTime: (state, action) => {
            state.time = action.payload;
        },
        decrementTime: (state) => {
            if (state.time > 0) state.time -= 1;
        },
        toggleRunning: (state) => {
            state.isRunning = !state.isRunning;
        },
        resetTimer: (state) => {
            state.time = 0;
            state.isRunning = false;
        },
    },
});

export const { setTime, decrementTime, toggleRunning, resetTimer } = countdownSlice.actions;
export default countdownSlice.reducer;