import ProjectPageNav from '../components/ProjectPageNav'
import Pill from '../components/Pill'
import Button from '../components/Button'
import projects from '../../../public/personalprojects.json'

export default function Project2(){

    const project = projects['Reservation-Bot']

    return (
        <>
            <main className='flex flex-col items-center bg-gray-900 min-h-screen' >
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
                        During university I faced the problem of not being able to workout due to a reservation system that would fill
                        in less than 1 minute when time-slots where released. To make matters worse, the reservations opened at
                        7am everyday. So I decieded to automate the whole process to run automatically within milliseconds of the new openings.
                        The first prototype used Selenium to automatically open chrome, login, and reserve my spot. Becuase I wanted to make the 
                        bot even faster I decied to use the chrome dev tools to disect the API requests from the reservation website. I then used
                        the Python requests library to login and capture my session cookie to then send POST requests for all my reservations authenticated
                        by my session cookie. This took the reservation time from 10 seconds to less than 2 seconds. I never missed a reservation again!

                    </p>
                    {/* <Button href={project.link} text='View on GitHub'/> */}
                </div>

            </main>
        </>
        )
}