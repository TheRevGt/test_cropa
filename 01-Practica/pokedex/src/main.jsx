import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Pokedex } from './Pokedex.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <NavBar/>
      <Pokedex></Pokedex>
    </React.StrictMode>,
  </BrowserRouter>
)
