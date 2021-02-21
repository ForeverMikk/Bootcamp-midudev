import React, { useState } from "react";

//Asi se exporta un Modulo Nombrado
import { Note } from "./Note";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSumbit = (event) => {
    event.preventDefault();

    console.log("crear Nota");
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    setNotes([...notes, noteToAddToState]);
    // setNotes(notes.concat(noteToAddToState));
    setNewNote("");
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <h1>Notas</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show only Important" : "ShowAll"}
      </button>

      <ul>
        {notes
          .filter((note) => {
            if (showAll) return true;
            return note.important === true;
          })
          .map((note) => (
            // Cuando se renderisa una lista de elementos se debe crear una "key"
            // y tener un identificador unico
            // En este casi se utiliza el id de los objetos
            <Note key={note.id} {...note} />
          ))}
      </ul>

      <form onSubmit={handleSumbit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button> Crear Nota</button>
      </form>
    </div>
  );
}
