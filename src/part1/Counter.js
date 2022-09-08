import React, { useState } from 'react';

const CounterComponent = ({number}) => {
    console.log("Counter Render");
    return <h1>{number}</h1>
} 

// const INITIAL_COUNTER_STATE = {
//     left: 0,
//     right: 0,
//     message: "Mensaje del Contador"
// }

const Counter = () => {
    // const [counter, setCounter] = useState(INITIAL_COUNTER_STATE);
    
    const [clicks, setClicks] = useState([]);

    const ListOfClicks = ({ clicks }) => {
        return <p>{clicks.join(", ")}</p>
    }

    const WarningNotUsed = () => {
        return <p>No hay Clicks</p>
    }

    // const isEven = counter.clicks % 2 === 0;
    // const mensajePar = isEven ? "Es Par" : "Es Inpar";

    const handleClickLeft = () => {
        // const newCounterState = {
        //     ...counter,
        //     left: counter.left + 1
        // }
        // setCounter(newCounterState);
        setClicks(prevClicks => [...prevClicks, 'L'])
    }
    const handleClickRight = () => {
        // // const newCounterState = {
        //     ...counter,
        //     right: counter.right + 1
        // }
        // setCounter(newCounterState);
        setClicks(prevClicks => [...prevClicks, 'R']);
    }

    const handleClickReset = () => {
        setClicks([])
    }

    // const handleClickRest = () => {
    //     setContador(contador - 1)
    // }

    const left = clicks.filter(click => click === 'L');
    const right = clicks.filter(click => click === 'R');

    return (
        <>
            {/* <h2>{counter.message}</h2> */}
            <CounterComponent number={`Total: ${clicks.length}`} />
            <CounterComponent number={left.length} />
            <CounterComponent number={right.length} />
            {/* <h2>{mensajePar}</h2> */}
            <button onClick={handleClickLeft}>Izquierda</button>
            <button onClick={handleClickRight}>Derecha</button>
            <button onClick={handleClickReset}>Reset</button>

            {clicks.length === 0
                ? <WarningNotUsed />
                : <ListOfClicks clicks={clicks} />
            }
            {/* <button onClick={handleClickRest}>Restar</button> */}
        </>
    )
}


export default Counter;
