import React  from "react";
import { useDispatch } from "react-redux";
import { reset} from "../counterNumber/counterNumberSlice";

export function ResetBtn() {
    const dispatch = useDispatch();
    const onReset = () => {
        dispatch(reset());
    };

    return(
        
        <div id='resetBtn'>
            <button onClick={onReset}>Mettre à zéro</button>
        </div>
    );
}