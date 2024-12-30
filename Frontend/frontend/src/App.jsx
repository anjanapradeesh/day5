import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Addemp from './components/Addemp'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
        <Routes>
        <Route path="/addemp" element={<Addemp />} />
        <Route path="/view" element={<View />} />
        </Routes>
          
    </>
  )
}

export default App
