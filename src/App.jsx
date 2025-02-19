import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './pages/layout'
import Filtro from './pages/filtroPage'
import Home from './pages/home'
import User from './pages/user'


function App() {
  return (
    <Routes>
      <Route path="/" element={< Layout />}>
        <Route index element={< Home />} />
        <Route path="/filtro" element={< Filtro />} />
        <Route path="/user/:id" element={< User />} />
      </Route>
    </Routes>
  )
}

export default App
