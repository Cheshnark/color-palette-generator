import './App.css'
import { useState } from 'react'

import Main from '../views/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main />
    </div>
  )
}

export default App
