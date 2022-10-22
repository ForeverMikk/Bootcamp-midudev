import React from 'react';

const Note = ({id, content, date}) => {
    return(
      <li>
        <h3>{content}</h3>
        <p>{id}</p>
        <span>{date}</span>
      </li>
    )
  }

export default Note;