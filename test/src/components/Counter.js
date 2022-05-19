import { useState } from "react";

const Counter = ({initialValue = 0}) => {
    let[counterValue, setCounterValue] = useState(initialValue);
    const handleSubstrac = (e) => {
        setCounterValue(counterValue-1);
    };
    const handleAdd = (e) => {
        setCounterValue(counterValue+1);
    };
    return (
        <>
            <button onClick={handleSubstrac}>-</button>
            <span>{counterValue}</span>
            <button onClick={handleAdd}>+</button>
        </>
    );
};

export default Counter;