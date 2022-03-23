import React from 'react';

import { useState, useEffect } from 'react';
import './App.css';

const Test = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert("Counter changed to: " + counter);
    }, [counter])

    return (
        <div className="App">
            <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
        </div>
    )
}
