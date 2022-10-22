import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Note from './part2/Note';

const notes = [
  {
    id: 1,
    content: 'HTML',
    date: '2022-05-30T17:30:31.09BZ',
    important: true
  },
  {
    id: 2,
    content: 'CSS',
    date: '2022-05-30T17:30:31.09BZ',
    important: true
  },
  {
    id: 3,
    content: 'JavaScript',
    date: '2022-05-30T17:30:31.09BZ',
    important: true
  },
]

const App = () => {
  return (
    <div className="App">
      <ol>
        {notes && notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))