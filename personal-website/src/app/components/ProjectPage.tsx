import Pill from './Pill.tsx'

export default function ProjectPage(props: ProjectPageProps){

    interface ProjectPageProps {
        tags: Array<string>,
        title: string,
        github_url: string,
        

    }

    return(
        <>
            <div>
                <a>
                    back
                </a>
                <h1>
                    Project title
                </h1>
                <a>
                    GitHub
                </a>
            </div>
            <div>
                technology pills here.
            </div>
            <div>
                content in here

            </div>
            

        </>
    )
}