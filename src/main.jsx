import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {MainPage }from './App.jsx'
import About from './about.jsx'
import Images from './images.jsx'
import Allinfo from './AllInfo.jsx'
import People from './person.jsx'
import Costomars from './costomars.jsx'
import EachPerson from './eachperson.jsx'
import Weather from './weather.jsx'
import Pages from './Pages.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/images' element={<Images/>}/>
      <Route path='/allinfo' element={<Allinfo/>}/>
      <Route path='/allinfo/:id' element={<People/>}/>
      <Route path='/costomars' element={<Costomars/>}/>
      <Route path='/costomars/:id' element={<EachPerson/>}/>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='/Pages' element={<Pages/>}/>

    </Routes>
    </BrowserRouter>
  
)
