export const Note = (props) => {
  // DEbugeando las props de React Facilmente
  const { content, date } = props;

  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  );
};

// export default Note;
