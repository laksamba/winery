import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './Pages/About'
import FaqPage from './Pages/FaqPage'

function App() {
 

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/faq' element={<FaqPage/>}/>
   </Routes>
   <Footer/>
   
   </BrowserRouter>
  )
}

export default App
