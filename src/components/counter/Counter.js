import React, { useState, useEffect } from 'react';
import Count from './Count';

const Counter = () => {
    const [title, setTitle] = useState('Custom Counter');
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);

    if (increment < 1) {
        setIncrement(1)
    }

    return (
        <div className="counter-container">
            <h2>{title}</h2>
            <Count count={count} />
            <div className="counter-controller">
                <button type="button" className="btn btn-dec" onClick={() => setCount(count - increment)}>-</button>
                <button type="button" className="btn btn-reset" onClick={() => setCount(0)}>Reset</button>
                <button type="button" className="btn btn-inc" onClick={() => setCount(increment + count)}>+</button>
            </div>
            <div className="counter-settings">
                <form className="settings-row">
                    <p>Name: </p><input className="" value={title} onChange={(e) => setTitle(e.target.value)} />
                </form>
                <div className="settings-row">
                    <p>Increment: </p><input type="number" value={increment} onChange={(e) => setIncrement(Number(e.target.value))} />
                </div>
                <div className="settings-row settings-btns">
                    <button type="button" className="btn btn-dec" onClick={() => setIncrement(increment - 1)}>-</button>
                    <button type="button" className="btn btn-inc" onClick={() => setIncrement(increment + 1)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter