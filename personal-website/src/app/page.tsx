import Image from 'next/image'
import ProjectCard from './components/ProjectCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900">
      <h1 className="text-4xl font-bold text-sky-500">Robert Mazza</h1>
      This is the home page
      <ProjectCard/>
    </main>
  )
}
