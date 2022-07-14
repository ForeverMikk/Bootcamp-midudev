import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './part1/Counter';
import Message from './part1/Message';

const App = () => {
  

  return (
    <div>
      <Message />
      <Counter />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))