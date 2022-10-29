import React from 'react';

const Note = ({id, content, date}) => {
    return(
      <li>
        <p><strong>{id}</strong> {content}</p>
        <span>{date}</span>
      </li>
    )
  }

export default Note;