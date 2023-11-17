import ProjectPageNav from '../components/ProjectPageNav'
import Pill from '../components/Pill'
import Button from '../components/Button'
import projects from '../../../public/personalprojects.json'

export default function Project5(){

    const project = projects['Password-Manager']

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
                        I used LastPass or 1Password to manage my passwords for the last 5+ years, but recently I didn&apos;t like the idea
                        of having all my passwords stored on someone else&apos;s servers. I also had been looking to use a Raspberry Pi that
                        had been sitting around, so I decied to implement my own personal password manager server. I found an open-source 
                        password manager Vaultwarden and decided to implement it. The Raspberry Pi is running 3 Docker containers, a container for
                        Vaultwarden, a container for Cloudfire&apos;s Zero Trust Tunnel, and a container that creates encrypted backups of the password database.
                    </p>
                    {/* <Button href={project.link} text='View on GitHub'/> */}
                </div>

            </main>
        </>
        )
}