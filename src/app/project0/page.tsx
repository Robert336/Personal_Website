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
                    <p className='mt-5'>
                        The front-end I had in mind was to use discord.js to create a Discord bot that players can use to start and manage their races.
                        Because most players are already using Discord to chat with their friends, having players interface via Discord would reduce the hassle 
                        of navigating a seperate GUI on a website.
                    </p>
                    <p className='mt-5'>
                        For the back-end my idea was to setup an API that takes handles requests from the Discord bot to manage Docker containers 
                        running the game servers. The Express.js server recieves a request to start a match, then uses the Docker API to launch a 
                        container for the game server given a specific game configeration.
                    </p>
                    {/* <Button href={project.link} text='View on GitHub'/> */}
                </div>

            </main>
        </>
        )
}