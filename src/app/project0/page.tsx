import ProjectPageNav from '../components/ProjectPageNav'
import Pill from '../components/Pill'
import Button from '../components/Button'
import projects from '../../../public/personalprojects.json'

export default function Project0(){

    const project = projects['AC-Server']

    return (
        <>
            <main className='flex flex-col items-center bg-gray-900 min-h-screen' >
                <ProjectPageNav title='Assetto Corsa Distributed Game Servers'/>

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
                        This project solves the hassle of setting up Assetto Corsa servers, specifically for 1 vs 1 races.
                        It utilizes Docker to handle starting and stopping game server instances. Node.js + Express.js for creating a RESTful
                        API that handles managing the containerized game servers.
                    </p>
                    {/* <Button href={project.link} text='View on GitHub'/> */}
                </div>

            </main>
        </>
        )
}