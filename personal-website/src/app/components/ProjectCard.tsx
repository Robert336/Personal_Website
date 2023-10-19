import Pill from './Pill'

export default function ProjectCard() {
    return (
      <>
        <div className="grid-cols-3 gap-3 h-24 bg-slate-800 rounded-lg p-2 flex shadow-inner-top">
            <p>image here</p>
            <p>text here</p>
            <Pill text="TypeScript"/>
        </div>
      </>
    )
}