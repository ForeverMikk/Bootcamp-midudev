import React, { useState, useEffect } from 'react';
import Note from './part4-fetch-data/Note';
import { getAllNotes } from './part4-fetch-data/services/getAllNotes';
import { createNote } from './part4-fetch-data/services/createNote';

const App = () => {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
  useEffect(() => {
    setLoading(true);

    getAllNotes()
      .then(notes => {
        setNotes(notes);
        setLoading(false);
      }); 
    
  }, [])
  
  const handleChange = (event) => {
    setNewNote(event.target.value); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAdd = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    createNote(noteToAdd).then((newNote) => {
      setNotes((prevNotes) => prevNotes.concat(newNote));
      setError('');
    })
    .catch(error => {
      console.log(error);
      setError('La API se callo');
    })
    
    setNewNote('')
  }

  return ( 
    <div className="App">
      <h1>Notas</h1>

      {loading 
        ? 'Cargando....' 
        : ''  
      }

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>

      {error ? <span style={{color: 'red'}}>{error}</span> : ''}

      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note}/>
        ))}
      </ol>

    </div>
  );
}

export default App;
