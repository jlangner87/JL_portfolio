import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
