import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
  return (
    <div className='flex p-5 justify-evenly  dark:bg-neutral-900 dark:text-white'>
        <div className='flex  gap-3 px-3 p-1 border rounded-2xl'>
        <div>Home</div>
        <div>About</div>
        <div>Exp</div>
        <div>Skills</div>

        </div>
      <DarkModeToggle/>
    </div>
  )
}

export default Navbar
