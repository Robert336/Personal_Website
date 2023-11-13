import Pill from './Pill'
import Link from 'next/link'
import Button from './Button'

interface ProjectPageNavProps {
    title: string,
}

export default function ProjectPageNav(props: ProjectPageNavProps){

    return(
        <>
            <div className='flex flex-col items-center justify-center pt-10 gap-4 w-full'>
                <h1 className='text-xl font-bold text-center'>
                    {props.title}
                </h1>
            </div>

        </>
    )
}