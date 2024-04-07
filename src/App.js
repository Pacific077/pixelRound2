import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from './Pages/Home/Home';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App