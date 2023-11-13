import ProjectPageNav from '../components/ProjectPageNav'
import Pill from '../components/Pill'
import Button from '../components/Button'
import projects from '../../../public/personalprojects.json'

export default function Project4(){

    const project = projects['Search-Engine']

    return (
        <>
            <main className='flex flex-col items-center bg-zinc-900 min-h-screen' >
                <ProjectPageNav title={project.title}/>

                <div className='flex flex-col items-center p-4 md:max-w-3xl'>
                    <h2 className='text-lg font-medium mb-2'>
                        Technologies
                    </h2>
                    <div className='flex flex-wrap justify-center gap-2 m-3'>
                        {project.tags.map((tag) => (
                            <Pill text={tag} key={tag}/> // using tag as the key because they are unique per project
                        ))}
                    </div>
                    <h2 className='text-lg font-medium my-2'>
                        Overview
                    </h2>
                    <p>
                        This project was completed as a team of 3 for a class project in our Search Engine and Text Retreval course. 
                    </p>
                    {/* <Button href={project.link} text='View on GitHub'/> */}
                </div>

            </main>
        </>
        )
}