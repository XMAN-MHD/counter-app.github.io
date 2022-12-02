import React  from "react";
import { useDispatch } from "react-redux";
import { addValue } from "../counterNumber/counterNumberSlice";


export function AddValue() {

    const dispatch = useDispatch();
    let value=0;
    const handleChange = (e) => {
        value = e.target.value;
        value = Number(value);
    }    ;
    const OnAdd = () => {
        dispatch(addValue(value))
    } ;        

    return(
                                                                                                                                                                                                                                            
        <div id='add-value'>
            <input type="number" onChange={handleChange} placeholder='valeur'/>
            <button onClick={OnAdd}>Ajouter</button>
        </div>
    );
}