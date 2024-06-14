import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import Home from './components/home';
import Login from './components/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#d1c6c6] h-screen flex justify-center items-center">

      {/* <h1>VPN Decryptor</h1>
      <Button variant="contained">Connexion</Button>
      <Home/> */}
      <Login />
    </div>
  )
}

export default App
