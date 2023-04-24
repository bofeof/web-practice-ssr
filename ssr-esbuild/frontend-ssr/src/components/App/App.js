import React, { useEffect, useState } from 'react';
import './App.css';
import ImgComponent from '../ImgComponent/ImgComponent';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    setCounter(0)
  }, [])

  function handleClick() {
    window.alert('Oh wow');
  }
  function handleSetCounter() {
    setCounter((prev) => {
      return prev + 1;
    });
  }

  return (
    <div className="app">
      <h1 className="app__header">
        Hi, the main aim of this app is to check js-scripts, state-value and building of SSR: esbuild
      </h1>
      <button className="app__button" type="button" onClick={handleClick}>
        Show message
      </button>
      <div>
        <p>{counter}</p>
        <button className="app__button" type="button" onClick={handleSetCounter}>
          Counter (check react state)
        </button>
      </div>
      <ImgComponent />
    </div>
  );
}

export default App;
