import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Forma Corta
// const Title = ({course}) => <h1>{course}</h1>
// Forma Larga
const Title =(props) => {
  return <h1>{props.course}</h1>
}

const Subtitle = (props) => {
  return <p> <h3>{props.part}</h3> {props.exercice}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10 
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Subtitle part={part1} exercice={exercises1}/>
      <Subtitle part={part2} exercice={exercises2}/>
      <Subtitle part={part3} exercice={exercises3}/>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))