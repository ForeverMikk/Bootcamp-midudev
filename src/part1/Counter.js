import React, { useState } from 'react';

const CounterComponent = ({number}) => {
    console.log("Counter Render");
    return <h1>{number}</h1>
} 

const Counter = () => {
    const [counter, setCounter] = useState({
        left: 0,
        right: 0,
        message: "Mensaje del Contador"
    });
    
    const [clicks, setClicks] = useState([]);

    const isEven = counter.clicks % 2 === 0;
    const mensajePar = isEven ? "Es Par" : "Es Inpar";

    const handleClickLeft = () => {
        const newCounterState = {
            ...counter,
            left: counter.left + 1
        }
        setCounter(newCounterState);
        setClicks(prevClicks => {
            return [...prevClicks, 'L']
        })
    }
    const handleClickRight = () => {
        const newCounterState = {
            ...counter,
            right: counter.right + 1
        }
        setCounter(newCounterState);
        setClicks(prevClicks => {
            return [...prevClicks, 'R']
        });
    }

    const handleClickReset = () => {
        const newCounterState = {
            ...counter,
            left: 0,
            right: 0
        }
        setCounter(newCounterState)
    }

    // const handleClickRest = () => {
    //     setContador(contador - 1)
    // }

    return (
        <>
            <h2>{counter.message}</h2>
            <CounterComponent number={`Total: ${clicks.length}`} />
            <CounterComponent number={counter.left} />
            <CounterComponent number={counter.right} />
            <h2>{mensajePar}</h2>
            <button onClick={handleClickLeft}>Izquierda</button>
            <button onClick={handleClickRight}>Derecha</button>
            <button onClick={handleClickReset}>Reset</button>

            {clicks.join(", ")}
            {/* <button onClick={handleClickRest}>Restar</button> */}
        </>
    )
}


export default Counter;
