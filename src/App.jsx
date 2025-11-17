import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './Pages/About'
import FaqPage from './Pages/FaqPage'
import Event from './components/Eventcomponents/Event'
import EventCard from './components/Eventcomponents/EventCard'
import Contact from './Pages/Contact'
import ShopPage from './Pages/ShopPage'

function App() {
 

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/faq' element={<FaqPage/>}/>
    <Route path='/events' element={<Event/>}/>
    <Route path='/blog' element={<EventCard/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/shop' element={<ShopPage/>}/>
   </Routes>
   <Footer/>
   
   </BrowserRouter>
  )
}

export default App
