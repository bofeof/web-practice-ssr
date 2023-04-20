import React from 'react'

function App () {
  function handleClick () {
    console.log('oh wow')
  }

  return (
    <div>
      <h1>Hi</h1>
      <button type="button" onClick={handleClick} style={{ height: 20, width: 60 }}>Click me</button>
    </div>
  )
}

export default App
