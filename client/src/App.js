import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import WikiBean from './pages/projects/wikibean'
import RPS from './pages/projects/rps'
import Recipes from './pages/projects/recipes'
import MyFolio from './pages/projects/myfolio'
import Dice from './pages/projects/dice'
import Alice from './pages/projects/alice'
import Footer from './components/footer'
import TeamLindsay from './pages/projects/teamlindsay'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wikibean" element={<WikiBean />} />
        <Route path="/rps" element={<RPS />} />
        <Route path="/recipes_for_me" element={<Recipes />} />
        <Route path="/my_portfolio" element={<MyFolio />} />
        <Route path="/rpg_dice" element={<Dice />} />
        <Route path="/alice_python" element={<Alice />} />
        <Route path="/team_lindsay" element={<TeamLindsay />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
