import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Home from './Pages/Home'
import About from './components/About'
import RegisterPage from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App
