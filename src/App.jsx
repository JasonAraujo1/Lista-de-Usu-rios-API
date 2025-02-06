import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './pages/layout'
import Filtro from './pages/filtroPage'
import Home from './pages/Home'


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
