import Pill from './Pill'
import Image from 'next/image'
import image_placeholder from '../../../public/image_placeholder.png'

export default function ProjectCard() {
    return (
      <>
        <div className="grid-cols-3 gap-3 h-24 w-full bg-slate-800 rounded-lg p-2 flex shadow-inner-top hover:bg-gradient-to-r from-cyan-500/[.15] to-purple-500/[.15]">
            <Image src={image_placeholder} alt="preview screenshot of the project" className="max-w-[122px] rounded"/>
            <p>text here</p>
            <Pill text="TypeScript"/>
        </div>
      </>
    )
}