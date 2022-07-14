import React from 'react';

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10 
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Title =(props) => {
    return <h1>{props.course}</h1>
}
    
const Subtitle = (props) => {
    return <h3> <span>{props.part}</span> <br /> {props.exercice}</h3>
}

const Message = () => {
    return (
        <>
            <Title course={course}/>
            <Subtitle part={part1} exercice={exercises1}/>
            <Subtitle part={part2} exercice={exercises2}/>
            <Subtitle part={part3} exercice={exercises3}/>
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </>
    )
}

export default Message;
