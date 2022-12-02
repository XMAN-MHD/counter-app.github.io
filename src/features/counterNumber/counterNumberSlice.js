import { createSlice} from "@reduxjs/toolkit";

const counterNumberSlice = createSlice(
    {
        name: 'counterNumber', 
        initialState: 0, 
        reducers: {
            increment: (state, action) => {
                return state + action.payload;
            }, 
            decrement: (state, action) => {
                if(state > 0)
                    return state - action.payload;
                else
                    return state = 0; 
            },
            reset: (state, action) => {
                return state = 0;
            }, 
            addValue:(state, action) => {
                if(state >= 0)
                    return state + action.payload;
                else
                    return state = 0;
            }
        }
    }

);

export const selectCounterNumber = (state) => state.counterNumber;

export default counterNumberSlice.reducer

export const {increment, decrement, reset, addValue} = counterNumberSlice.actions


