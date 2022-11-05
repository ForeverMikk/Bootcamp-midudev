import React, { useState, useEffect } from 'react';
import Note from './part4-fetch-data/Note';
import axios from 'axios';

const App = () => {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(true);

    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response)
        const {data} = response;
        setNotes(data);
        setLoading(false);
      }); 
    
  }, [])
  
  const handleChange = (event) => {
    setNewNote(event.target.value); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAdd = {
      // id: notes.length + 1,
      title: newNote,
      body: newNote,
      userId: 1
    }

    axios.post("https://jsonplaceholder.typicode.com/posts", noteToAdd)
    .then(response => {
      const {data} = response;
      // console.log(data)
      setNotes(prevNotes => prevNotes.concat(data));
    })


    // console.log(noteToAdd);
    // setNotes([...notes, noteToAdd])
    // setNewNote('')
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

      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note}/>
        ))}
      </ol>

    </div>
  );
}

export default App;
