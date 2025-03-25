import React from 'react'

const Skills = () => {
    const Languages = ['javascript', 'typescript', 'c++']
    const Frontend = ["React.js", "Redux", "Recoil", "TailwindCSS", "Responsive Design"]
    const Backend = ["Node.js", "Express.js", "RESTful APIs", "Authentication"]
    const Other = ["Git", "Github", "Postman", "API Integration", "Cloud Services (Cloudinary)"]
    const headers = ['Languages', 'Backend', 'Frontend', 'Other']
    const skills = {Languages,Frontend,Backend,Other};
    return (
        <div className='mt-10 '>
            <div className='text-xl font-bold'>
                Skills
            </div>
            {headers.map((head ,index) => (
                <div key={index}>
                    <div className='text-neutral-800 dark:text-neutral-100'>
                        {head}
                    </div>
                    <div className='flex gap-2 flex-wrap'>
                        {skills[head].map((sk,index) => (
                            <div key={index} className='bg-neutral-100  text-sm dark:text-neutral-100 dark:border-neutral-500 dark:bg-neutral-700 text-neutral-950 border border-neutral-300 px-2 py-0.5 rounded-md'>{sk}</div>
                        ))}
                    </div>
                </div>

            ))}



            {/* <div className='text-neutral-800 dark:text-neutral-100'>
                Languages

            </div>
            <div className='flex gap-2 flex-wrap'>
                {languages.map((sk) => (
                    <div className='bg-neutral-700  text-sm dark:text-neutral-800 dark:bg-white text-white px-2 py-0.5 rounded-md'>{sk}</div>
                ))}
            </div>
            <div className='text-neutral-800 dark:text-neutral-100'>
                Backend
            </div>
            <div className='flex gap-2 flex-wrap'>
                {backend.map((sk) => (
                    <div className='bg-neutral-700 text-sm dark:text-neutral-800 dark:bg-white text-white px-2 py-0.5 rounded-md'>{sk}</div>
                ))}
            </div>
            <div className='text-neutral-800 dark:text-neutral-100'>
                Frontend
            </div>
            <div className='flex gap-2 flex-wrap'>
                {frontend.map((sk) => (
                    <div className='bg-neutral-700 text-sm dark:text-neutral-800 dark:bg-white text-white px-2 py-0.5 rounded-md'>{sk}</div>
                ))}
            </div>
            <div className='text-neutral-800 dark:text-neutral-100'>
                Other
            </div>
            <div className='flex gap-2 flex-wrap'>
                {other.map((sk) => (
                    <div className='bg-neutral-700 text-sm dark:text-neutral-800 dark:bg-white text-white px-2 py-0.5 rounded-md'>{sk}</div>
                ))}
            </div> */}

        </div>
    )
}

export default Skills
