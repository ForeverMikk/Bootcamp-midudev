import React, { useState } from 'react';

const CounterComponent = ({number}) => {
    console.log("Counter Render");
    return <h1>{number}</h1>
} 

const Counter = () => {
    const [contador, setContador] = useState(0);
    const isEven = contador % 2 === 0;
    const mensajePar = isEven ? "Es Par" : "Es Inpar";

    const handleClick = () => {
        setContador(contador + 1)
    }

    const handleClickReset = () => {
        setContador(0)
    }

    const handleClickRest = () => {
        setContador(contador - 1)
    }

    return (
        <>
            <CounterComponent number={contador} />
            <h2>{mensajePar}</h2>
            <button onClick={handleClick}>Sumar</button>
            <button onClick={handleClickReset}>Reset</button>
            <button onClick={handleClickRest}>Restar</button>
        </>
    )
}


export default Counter;
