import React, { useState, useEffect } from 'react';
import Note from './part4-fetch-data/Note';

const App = () => {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      }); 
    
  }, [])
  
  const handleChange = (event) => {
    setNewNote(event.target.value); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAdd = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
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
          <Note key={note.id} {...note}/>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}

export default App;
