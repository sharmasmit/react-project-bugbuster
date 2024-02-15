import { useState } from 'react';
import './App.css';
import Header from './Components/Header';


function App() {

  // let myNum = {
  //   number: 1000
  // };

  const [myName, setMyName] = useState('Smit sharma')

  const changeName = () => {
    setMyName('Harsh Mistry')
  }

  return (

    <div className="App">
      <button onClick={changeName}>Click Here</button>
      <h1>{myName}</h1>
      <hr />
      <Header />
    </div >
  );
}

export default App;
