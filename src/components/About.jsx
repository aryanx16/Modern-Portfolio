import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const About = () => {
    return (
        <div>

            {/* <div className='w-screen flex p-4  duration-500 font-mono justify-center dark:bg-neutral-900 dark:text-white items-center'>
                <div className='w-full  m-2 mt-10 max-w-2xl h-screen border-black  '> */}
                    <div className='flex justify-between'>
                        <div className='text-3xl font-bold font-mono'>Aryan Babare</div>
                        <div><DarkModeToggle /></div>
                    </div>
                    <div className='flex justify-between '>
                        <div className='w-100 text-neutral-500'>
                            <div className='text-sm '>

                                Full Stack Engineer focused on building products, functional and non functional requirements with extra attention to detail
                            </div>
                            <div className='text-sm flex gap-1 mt-1  items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-globe size-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                                Pune,India
                            </div>
                            
                            <div className='flex gap-1 mt-1'>
                                <a href="mailto:aryanbabare1@gmail.com" target="_blank" className=' border p-1 rounded-md dark:border-neutral-500 dark:hover:text-neutral-400 border-neutral-300 hover:text-neutral-700 dark:hover:bg-neutral-800 hover:bg-neutral-200 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </a>
                                <a href="https://github.com/aryanx16" className=' border p-1 rounded-md dark:border-neutral-500 dark:hover:text-neutral-400 border-neutral-300 hover:text-neutral-700 dark:hover:bg-neutral-800 hover:bg-neutral-200 '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/aryan-babare-49bb24298/" className=' border p-1 rounded-md dark:border-neutral-500 dark:hover:text-neutral-400 border-neutral-300 hover:text-neutral-700 dark:hover:bg-neutral-800 hover:bg-neutral-200 '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                </a>
                                <a href="https://leetcode.com/u/aryanx16/" className=' border p-1 rounded-md dark:border-neutral-500 dark:hover:text-neutral-400 border-neutral-300 hover:text-neutral-700 dark:hover:bg-neutral-800 hover:bg-neutral-200 '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img className='min-w-24 border bg-neutral-800 border-neutral-400 w-28 min-h-24 object-cover rounded-md' src="https://avatars.githubusercontent.com/u/190694148?s=400&u=03e5fb2cb93d0204b85215c06e4790d9a52ad711&v=4" alt="" />
                        </div>
                    </div>

                </div>
        //     </div>
        // </div>
    )
}

export default About
