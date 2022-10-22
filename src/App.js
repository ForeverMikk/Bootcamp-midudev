import React from 'react';

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
    id: 2,
    content: 'JavaScript',
    date: '2022-05-30T17:30:31.09BZ',
    important: true
  },
]

const App= () => {
  return (
    <div className="App">
      {notes.map((note) => (
        <p>{note.id}</p>
      ))}
    </div>
  );
}

export default App;
