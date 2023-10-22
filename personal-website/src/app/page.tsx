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
        I&apos;m a Computer Science new graduate with a passion for building solutions using tech.
      </h2>
      <div>
          <h3>1. About</h3>
          <p>About text goes here</p>
      </div>
      <div className="flex flex-col items-center gap-2 pt-10 w-screen">
        <h3>2. Projects</h3>
        <ProjectCard title='Game Server Orchestration for Assetto Corsa' subtitle='sub0' tags={['JavaScript', 'Node.js', 'Express.js', 'Docker']} />
        <ProjectCard title='Reservation Automation Bot' subtitle='sub1' tags={['Python', 'Postman', 'Selenium']}/>
        <ProjectCard title='Formula 1 Prediction AI' subtitle='sub2' tags={['Python', 'Jupyter', 'Pandas', 'Sci-Kit Learn']}/>
        <ProjectCard title='MuSpace Web App' subtitle='sub3' tags={['JavaScript', 'React.js', 'Firebase', 'Node.js']}/>
      </div>

      
    </main>
  )
}
