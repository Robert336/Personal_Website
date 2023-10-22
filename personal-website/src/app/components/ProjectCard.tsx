import Pill from './Pill'
import Image, { StaticImageData } from 'next/image'
import image_placeholder from '../../../public/image_placeholder.png'

interface ProjectCardProps {
  image: StaticImageData,
  title: string,
  subtitle: string,
  tags: Array<string>,

}

export default function ProjectCard(props: ProjectCardProps) {
    return (
      <>
        <div className="grid-cols-3 gap-3 max-w-2xl w-3/4 bg-slate-800 rounded-lg p-2 flex shadow-inner-top hover:bg-gradient-to-r from-cyan-500/[.15] to-purple-500/[.15]">
            <Image src={props.image ? props.image : image_placeholder} alt="preview screenshot of the project" className="max-w-[122px] rounded"/>
            <div className="flex flex-col">
              <p className="font-bold text-lg">{props.title}</p>
              <p className="text-sm">{props.subtitle}</p>
              <div className="flex flex-wrap justify-start gap-1 pt-1">
                {props.tags.map((tag) => (
                  <Pill text={tag} key={tag}/> // using tag as the key because they are unique per project
                ))}
            </div>
            </div>
            
            
            
            
        </div>
      </>
    )
}