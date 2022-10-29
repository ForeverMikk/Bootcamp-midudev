import React, { useState } from 'react';
import Note from './part2/Note';

const App = (props) => {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value); 
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log('crear nota');
    // console.log(newNote);

    const noteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    console.log(noteToAdd);
    setNotes([...notes, noteToAdd])
    setNewNote('')

  }

  const handleShowAll = () => {
    setShowAll(!showAll);
  }


  return ( 
    <div className="App">
      <h1>Notas</h1>

      <button onClick={handleShowAll}>{showAll ? 'show only important' : 'show all'} </button>
      <ol>
        {notes
        .filter(note => {
          // Si el showAll es true retorna todos los elementos
          if (showAll === true) return true;
          // Si no verifica cuales elementos son importantes y los renderiza
          return note.important === true;
        })
        .map((note) => (
          <Note key={note.id} {...note}/>
        ))}
      </ol>

      <form onSubmit={handleClick}>
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}

export default App;
