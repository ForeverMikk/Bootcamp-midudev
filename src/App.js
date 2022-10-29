import React, { useState } from 'react';
import Note from './part2/Note';

const App = (props) => {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value); 
  }

  const handleClick = (event) => {
    console.log('crear nota');
    // console.log(newNote);

    const noteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString()
    }

    console.log(noteToAdd);
    setNotes([...notes, noteToAdd])
    setNewNote('')

  }


  return ( 
    <div className="App">
      <h1>Notas</h1>

      <ol>
        {notes.map((note) => (
          <Note {...note}/>
        ))}
      </ol>

      <div>
        <input type='text' onChange={handleChange} value={newNote} />
        <button onClick={handleClick}>Crear Nota</button>
      </div>
    </div>
  );
}

export default App;
