import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Agency from './pages/Agency'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
     <Navbar/>
     <FullScreenNav/>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/agency' element={<Agency />} />
       <Route path='/work' element={< Work/>} />
     </Routes>
    </div>
  )
}

export default App
