import React from "react";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30",
    important: true,
  },
  {
    id: 2,
    content: "CSS is easy",
    date: "2019-05-30",
    important: true,
  },
  {
    id: 3,
    content: "JS is easy",
    date: "2019-05-30",
    important: true,
  },
];

// const notes = [];

export default function App() {
  return (
    // <div>
    //   {notes.map(note => {
    //     return (
    //       <p>
    //         <strong>{note.id}</strong>
    //         {note.content}
    //       </p>
    //     );
    //   })}
    // </div>

    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <p>{note.content}</p>
          <small>
            <time></time>
          </small>
        </div>
      ))}
    </div>
  );
}
