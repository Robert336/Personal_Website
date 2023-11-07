interface ButtonProps {
    href: string,
    text: string,
}

export default function Button(props: ButtonProps){
    
    return (
        <a href={props.href} className='p-1 pl-2 pr-2 border rounded hover:bg-white hover:text-gray-900'>
            {props.text}
        </a>
    )
}