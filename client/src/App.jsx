import React from 'react'
import { Routes, Route} from 'react-router'
import { Home } from './pages/HomePage/Home'
import './App.css';
export const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  )
}

export default App;