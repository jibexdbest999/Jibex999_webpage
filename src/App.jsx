import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import EndsModal from './components/Pages/EndsModal'
import AboutMe from './components/Pages/AboutMe'
import ContactMe from './components/Pages/ContactMe'
import NavBar from './components/NavBar'
import FrontendPage from './components/Pages/FrontendPage'
import FullstackPage from './components/Pages/FullstackPage'
import UnsubscribeComfirmationModal from './components/Pages/UnsubscribeComfirmationModal'

function App() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() =>{
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal])

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
      {showModal && <EndsModal onClose={() => setShowModal(false)} />}

        <NavBar openProjectsModal={() => setShowModal(true)} />

          <Routes>
            <Route path='/' 
              element={<Home openProjectsModal={() => setShowModal(true)} />}/>
                <Route path='/contact' element={<ContactMe/>}/>
                <Route path='/about' element={<AboutMe/>}/>
                <Route path='/soloprojects' element={<FrontendPage/>}/>
                <Route path='/teamprojects' element={<FullstackPage/>}/>
                <Route path='/unsubscribeconfirmation' element={<UnsubscribeComfirmationModal/>}/>
          </Routes>
    </div>
  )
}

export default App
