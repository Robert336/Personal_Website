import ProjectPageNav from '../components/ProjectPageNav'
import Pill from '../components/Pill'
import Button from '../components/Button'
import projects from '../../../public/personalprojects.json'

export default function Project1(){

    const project = projects['LCS-Website']

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
                      The club exexutives wanted a new landing page for students looking for more information. I collaborated with the club executives to
                      design a mock-up in Figma that they were happy with. Upon sign-off I then developed the website in less that 2 days using JavaScript, React.js, and Styled Components.
                      The site was not perfect but it was my first time learning and applying React.js to a project.
                    </p>
                    {/* <Button href={project.link} text='View on GitHub'/> */}
                </div>

            </main>
        </>
        )
}