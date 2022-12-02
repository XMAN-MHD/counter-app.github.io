import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../counterNumber/counterNumberSlice";

export function CounterBtn()
{
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(increment(1));
    };
    const onDecrement = () => {
        dispatch(decrement(1))
    };


    return(

        <div id='counter-btn'>
            <button id='btn-decrement' onClick={onDecrement}><span>-</span></button>
            <button id='btn-increment' onClick={onIncrement}><span>+</span></button> 
        </div>
    );
}