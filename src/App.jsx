import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import Home from './components/home';
import Login from './components/login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">

      {/* <h1>VPN Decryptor</h1>
      <Button variant="contained">Connexion</Button>
      <Home/> */}
      <Login />
    </div>
  )
}

export default App
