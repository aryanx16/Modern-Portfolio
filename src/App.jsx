import React from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
const App = () => {
  return (
    <>
      <div className='w-screen min-h-screen pb-24 flex p-4  duration-500 font-mono justify-center dark:bg-neutral-900 dark:text-white items-center'>
        <div className='w-full  m-2 mt-10 max-w-2xl  border-black  '>
          <About />
          <Education />
          <Skills />
          <Projects/>
        </div>
      </div>


    </>
  )
}

export default App
