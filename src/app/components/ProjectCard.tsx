import Pill from './Pill'
import Image from 'next/image'
import image_placeholder from '../../../public/image_placeholder.png'

interface ProjectCardProps {
  image_src: string,
  title: string,
  subtitle: string,
  tags: Array<string>,
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
      <>
        <div className="flex flex-col md:flex-row gap-3 max-w-full w-full md:max-w-2xl bg-zinc-800 rounded-lg p-4 shadow-inner-top hover:bg-gradient-to-r from-cyan-500/[.15] to-purple-500/[.15]">
            {/* <Image src={props.image_src ? props.image_src : image_placeholder} alt="preview screenshot of the project" className="self-center w-full md:max-w-[150px] h-full rounded"/> */}
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">{props.title}</h1>
              <p className="text-sm">{props.subtitle}</p>
              <div className="flex flex-wrap justify-start gap-1 pt-4 md:pt-2">
                {props.tags.map((tag) => (
                  <Pill text={tag} key={tag}/> // using tag as the key because they are unique per project
                ))}
            </div>
            </div>
        </div>
      </>
    )
}