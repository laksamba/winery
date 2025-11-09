import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Navbar from './components/Navbar'
import OurStory from './Pages/OurStory'

function App() {
 

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/ourstory' element={<OurStory/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
