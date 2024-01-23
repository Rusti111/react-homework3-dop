import Container from "./Container";
import { useState } from "react";


function App() {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [number, setNumber] = useState();

  return (
    <div className="container">

      <h1 id='name'> Calculator. </h1>

      <input type="number" placeholder='  Ответ.' value={number} className='input' />

      <Container input1={input1} setInput1={setInput1} input2={input2} setInput2={setInput2} number={number} setNumber={setNumber} />

    </div>
  );
}

export default App;
