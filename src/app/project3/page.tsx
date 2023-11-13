import ProjectPageNav from '../components/ProjectPageNav'
import Pill from '../components/Pill'
import Button from '../components/Button'
import projects from '../../../public/personalprojects.json'

export default function Project3(){

    const project = projects['Formula1-AI']

    return (
        <>
            <main className='flex flex-col items-center bg-zinc-900 min-h-screen' >
                <ProjectPageNav title={project.title}/>

                <div className='flex flex-col items-center p-4 md:max-w-3xl'>
                    <h2 className='text-lg font-medium mb-2'>
                        Technologies
                    </h2>
                    <div className='flex flex-wrap justify-center gap-2 m-3'>
                        {project.tags.map((tag) => (
                            <Pill text={tag} key={tag}/> // using tag as the key because they are unique per project
                        ))}
                    </div>
                    <h2 className='text-lg font-medium my-2'>
                        Overview
                    </h2>
                    <p>
                        Worked with a classmate to develop a predictive model for determining F1 race winners.
                        Using historical F1 data found on Kaggle, we cleaned and structured relevant data to be used in training
                        the model. Data points such as historical winners, qualifying results, and points standings. 
                        We conducted a exploritory analysis on the impact of qualifying positon on finishing position which
                        found that there is a strong correlation between a driver&apos;s starting and finishing position.
                        We trained a linear regression, neural network classifier, and neural network regressor. We were able to achieve
                        a 68% score on our neural network regressor when tested against the 2021 F1 season results. If you watch F1,
                        you know how crazy that season was in terms of battling for 1st place. 

                    </p>
                    {/* <Button href={project.link} text='View on GitHub'/> */}
                </div>

            </main>
        </>
        )
}