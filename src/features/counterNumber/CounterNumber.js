import React from "react";
import { useSelector } from "react-redux";
import { selectCounterNumber } from "./counterNumberSlice";


export function CounterNumber() {

    const counterNumber = useSelector(selectCounterNumber);
    return(

        <h1 id='counter-number'>{counterNumber}</h1>

    );
}