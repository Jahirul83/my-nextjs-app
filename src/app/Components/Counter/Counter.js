"use client";

import { useState } from "react";

const CounterPage = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="btn btn-primary" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
};

export default CounterPage;