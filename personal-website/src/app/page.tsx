import Image from 'next/image'
import ProjectCard from './components/ProjectCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900">
      <h1 className="text-4xl font-bold text-sky-500 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text pb-1">Robert Mazza</h1>
      <div className="flex-row pb-1">
        <a>links</a>
        <a>go</a>
        <a>here</a>
      </div>
      <h2 className="pb-10">
        I&apos;m a Computer Science new graduate with a passion for building.
      </h2>
      <div>
          <h3>1. About</h3>
          <p>About text goes here</p>
      </div>
      <div className="flex flex-col gap-2 pt-10">
        <h3>2. Projects</h3>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>

      
    </main>
  )
}
