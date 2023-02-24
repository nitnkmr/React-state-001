import './App.css';
import Data from './Data';
import { useState } from 'react';

function App() {
  let dark={
    backgroundColor:"#282c34",
    color:"white"

}
  let light={
    backgroundColor:"white",
    color:"#282c34"

}
  const [tog, settog] = useState(true)
  function toggle(){
    settog(!tog);
  }
  return (
    <div className="App" style={(tog)?dark :light}>
      <div className="header">
        <h1>Overreacted</h1>
        <button onClick={toggle} style={(tog)?light :dark}>{(tog)?"light mode":"dark mode"}</button>
      </div>
      <Data tog={tog}></Data>
    </div>
  );
}

export default App;
