import Pill from './Pill.jsx'
import Link from 'next/link'


interface ProjectPageNavProps {
    title: string,
    github_url: string,
}

export default function ProjectPageNav(props: ProjectPageNavProps){

    return(
        <>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full bg-gray-900'>
                <Link href='/' className=''>
                    Back
                </Link>
                <h1 className=''>
                    {props.title}
                </h1>
                <a href={props.github_url}>
                    GitHub
                </a>
            </div>

        </>
    )
}