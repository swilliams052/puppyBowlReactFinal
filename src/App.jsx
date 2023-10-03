import React, { useState } from 'react'
import './App.css'

import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import Home from './components/Home'

import { Routes, Route, Link } from 'react-router-dom'


function App() {
  const [player, setPlayer] = useState(null)
    console.log(player)

  return (
    <>
      
          <div id="navbar">
            <Link id='navbar-selectors' to='/'>
              Home
            </Link>
            <Link id='navbar-selectors' to='/AllPlayers'>
              All Players
            </Link>
            <Link id='navbar-selectors' to='/NewPlayerForm'>
              New Player Form
            </Link>
            <Link id='navbar-selectors' to='/SinglePlayer'>
              Single Player
            </Link>
          </div>
          <div id="main-section">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/AllPlayers' element={<AllPlayers setPlayer={setPlayer} />} />
              <Route path='/NewPlayerForm'  element={<NewPlayerForm />} />
              <Route path='/SinglePlayer'  element={<SinglePlayer player={player} setPlayer={() => {}} />} />
            </Routes>
          </div>



      
      
    </>
  )
}

export default App
