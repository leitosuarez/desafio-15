import { useState } from 'react'
import './App.css'
import FiltareableProducTable from './components/FiltareableProducTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FiltareableProducTable/>
  )
}

export default App
