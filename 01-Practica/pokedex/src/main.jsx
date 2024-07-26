import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Pokedex } from './Pokedex.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Pokedex></Pokedex>
    </React.StrictMode>,
  </BrowserRouter>
)
