import Message from './Message.js';

const Description = () =>{
  return <p>Hola este es un ejemplo de multiples componentes wowowowow</p>
}
const App= () => {
  return (
    <div className="App">
      <Message message='Hola Mundo'/>
      <Message message='Perros'/>
      <Description />
    </div>
  );
}

export default App;
