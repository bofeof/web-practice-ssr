import React, { useState } from 'react'

function App () {
  const [counter, setCounter] = useState(0)

  function handleClick () {
    window.alert('Oh wow')
  }
  function handleSetCounter () {
    setCounter((prev) => { return prev + 1 })
  }

  return (
    <div>
      <h1>Hi</h1>
      <button type="button" onClick={handleClick} style={{ height: 50, width: 100 }}>Click me</button>
      <div>
        <p>{counter}</p>
        <button type='button' onClick={handleSetCounter} style={{ height: 50, width: 100 }}>add</button>
      </div>
      <></>
    </div>
  )
}

export default App
