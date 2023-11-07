import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from './components/ProjectCard'
import projects from '../../public/personalprojects.json'
import Button from './components/Button'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center p-4 pt-10 max-w-2xl">
        <h1 className="text-4xl font-bold text-sky-500 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text pb-5">Robert Mazza</h1>
        <h2 className="text-center pb-5">
          Hi, welcome to my personal website! 
          I&apos;m a Computer Science new graduate with a passion for building solutions using tech.
        </h2>
        <div className="flex flex-row pb-5 gap-3">
          <Button text='GitHub' href="https://github.com/Robert336"/>
          <Button text='LinkedIn' href="https://www.linkedin.com/in/robert-mazza-6a8063203/"/>
          <Button text='rmazza33@gmail.com' href="rmazza33@gmail.com"/>
        </div>
        
        <div className="flex flex-col self-start">
          <h3 className="self-center text-xl font-bold text-cyan-500">
            About me
          </h3>
          <p>Short about section goes here, prob not more than 1 paragraph. Short about section goes here, prob not more than 1 paragraph.Short about section goes here, prob not more than 1 paragraph.Short about section goes here, prob not more than 1 paragraph.Short about section goes here, prob not more than 1 paragraph.Short about section goes here, prob not more than 1 paragraph.Short about section goes here, prob not more than 1 paragraph.Short about section goes here, prob not more than 1 paragraph.</p>
        </div>
        <div className="flex flex-col items-center gap-2 pt-10 w-full">
          <h3 className="self-center text-xl font-bold text-cyan-500">
              Personal Projects
          </h3>
          <Link href="/project0" className='w-full'>
            <ProjectCard title={projects['AC-Server'].title} subtitle={projects['AC-Server'].sub} tags={projects['AC-Server'].tags}/>
          </Link>
          <Link href="/project1" className='w-full'>
            <ProjectCard title={projects['LCS-Website'].title} subtitle={projects['LCS-Website'].sub} tags={projects['LCS-Website'].tags}/>
          </Link>
          <Link href="/project2" className='w-full'>
            <ProjectCard title={projects['Reservation-Bot'].title} subtitle={projects['Reservation-Bot'].sub} tags={projects['Reservation-Bot'].tags}/>
          </Link>
          <Link href="/project3" className='w-full'>
            <ProjectCard title={projects['Formula1-AI'].title} subtitle={projects['Formula1-AI'].sub} tags={projects['Formula1-AI'].tags}/>
          </Link>
          <Link href="/project4" className='w-full'>
            <ProjectCard title={projects['Search-Engine'].title} subtitle={projects['Search-Engine'].sub} tags={projects['Search-Engine'].tags}/>
          </Link>
          <Link href="/project5" className='w-full'>
            <ProjectCard title={projects['Password-Manager'].title} subtitle={projects['Password-Manager'].sub} tags={projects['Password-Manager'].tags}/>
          </Link>
          <Link href="/project6" className='w-full'>
            <ProjectCard title={projects['MuSpace Web App'].title} subtitle={projects['MuSpace Web App'].sub} tags={projects['MuSpace Web App'].tags}/>
          </Link>
        </div>

      </div>
    </main>
  )
}