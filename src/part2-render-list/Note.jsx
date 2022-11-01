import React from 'react';

const Note = ({id, content, date, important}) => {
    return(
      <li>
        <p><strong>{id}</strong> {content}</p>
        <span>{date}</span>
        <p>{important}</p>
      </li>
    )
  }

export default Note;