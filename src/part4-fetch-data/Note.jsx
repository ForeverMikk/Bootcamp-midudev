import React from 'react';

const Note = ({id, body, title}) => {
    return(
      <li>
        <p><strong>{id}</strong> {title}</p>
        <p>{body}</p>
      </li>
    )
  }

export default Note;