import React, { useState } from 'react';
import Note from './part2/Note';

const App = (props) => {

  const [notes, setNotes] = useState(props.notes);

  return ( 
    <div className="App">
      <h1>Notas</h1>

      <ol>
        {notes.map((note) => (
          <Note {...note}/>
        ))}
      </ol>

      <div>
        <input type='text' />
        <button>Crear Nota</button>
      </div>
    </div>
  );
}

export default App;
