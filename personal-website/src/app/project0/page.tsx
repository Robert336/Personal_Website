import ProjectPageNav from '../components/ProjectPageNav'
import Pill from '../components/Pill'

export default function Project0(){

    return (
        <>
            <main className='bg-gray-900 min-h-screen ' >
                <ProjectPageNav title='Assetto Corsa Distributed Game Servers' github_url='https://github.com/Robert336/'/>

                <div className='flex flex-col p-4'>
                    <h2 className='text-lg font-medium mb-2'>
                        Technologies
                    </h2>
                    <div className='flex flex-row gap-2'>
                        {props.tags.map((tag) => (
                            <Pill text={tag} key={tag}/> // using tag as the key because they are unique per project
                        ))}
                    </div>
                    <h2 className='text-lg font-medium mb-2'>
                        Overview
                    </h2>
                    <p>
                        This project solves the hassle of setting up Assetto Corsa servers, specifically for 1 vs 1 races.
                        It utilizes Docker to handle starting and stopping game server instances. Node.js + Express.js for creating a RESTful
                        API that handles managing the containerized game servers.
                    </p>
                </div>

            </main>
        </>
        
        )
}