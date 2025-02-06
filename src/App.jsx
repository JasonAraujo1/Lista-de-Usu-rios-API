import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './pages/layout'
import Home from './pages/home'
import Filtro from './pages/filtroPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={< Layout />}>
        <Route path="/home" element={< Home />} />
        <Route path="/filtro" element={< Filtro />} />
      </Route>
    </Routes>
  )
}

export default App
