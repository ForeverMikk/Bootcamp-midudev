import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const WarningNotUsed = () => {
  return <p>Todavia no se ha usado el contador</p>
}

const ListOfClicks = ({clicks}) => {
  // debugger;
  return <p>{clicks.join(", ")}</p>
}
const App = ({valorInicial}) => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] =useState(0);

  const [counters, setCounters] = useState({
    right: 0,
    left: 0, 
    // clicks: 0,
    mensaje: "Hola que hace"
  })

  // Hay que evitar usar Estados Para cualquier cosa
  const[clicks, setClicks] = useState([])

  const handleLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1,
    };
    setCounters(newCountersState)
    setClicks(prevClicks => [...prevClicks,'L'])
  }
  
  const handleRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
    })
    setClicks(prevClicks => [...prevClicks,'R'])
  }

  return (
    <div>
      <p>Clicks totales: {clicks.length}</p>
      <p>{counters.mensaje}</p>
      {counters.left}
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
      {counters.right}
      <p>Clicks totales: {clicks.length}</p>
      {/* RENDERISADO CONDICIONAL */}
      {clicks.length === 0
      ? <WarningNotUsed />
      : <ListOfClicks clicks={clicks}/>}
    </div>
  )
}

const rootElement = document.getElementById("root");  

ReactDOM.render(<App valorInicial={0}/>, rootElement);
