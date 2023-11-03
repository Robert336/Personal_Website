import Pill from './Pill.jsx'
import Link from 'next/link'


interface ProjectPageNavProps {
    title: string,
    github_url: string,
}

export default function ProjectPageNav(props: ProjectPageNavProps){

    return(
        <>
            <div className='flex flex-col items-center justify-center p-3 gap-4 w-full bg-gray-900'>
                <h1 className='text-xl font-bold text-center p-2'>
                    {props.title}
                </h1>
                <a href={props.github_url} className='p-1 pl-2 pr-2 border rounded hover:bg-white hover:text-gray-900'>
                    GitHub
                </a>
            </div>

        </>
    )
}