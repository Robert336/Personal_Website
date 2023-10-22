interface PillProps {
    text: string
}

export default function Pill(props: PillProps){

    return (
        <div className="flex items-center place-content-center rounded-full py-2 px-4 h-7 bg-cyan-800 shadow-inner-top">
            <p className="text-cyan-300 text-xs">{props.text}</p>
        </div>
    )

}