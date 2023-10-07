import React, { useState } from 'react'
import './App.css'

import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import Home from './components/Home'

import { Routes, Route, Link, useParams } from 'react-router-dom'
import SinglePlayer from './components/SinglePlayer'
import Player from './components/Player'


function App() {
  const [player, setPlayer] = useState(null)


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
            <Link id='navbar-selectors' to='/SinglePlayer/:id'>
              Single Player
            </Link>
          </div>
          <div id="main-section">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/AllPlayers' element={<AllPlayers setPlayer={setPlayer} />} />
              <Route path='/NewPlayerForm'  element={<NewPlayerForm />} />
              <Route path='/Player'  element= {<div></div>} />
              <Route path='/SinglePlayer/:id'  element= {<SinglePlayer player={player} />} />
            </Routes>
          </div>



      
      
    </>
  )
}

export default App
