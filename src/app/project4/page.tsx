import ProjectPageNav from '../components/ProjectPageNav'
import Pill from '../components/Pill'
import Button from '../components/Button'
import projects from '../../../public/personalprojects.json'

export default function Project4(){

    const project = projects['Search-Engine']

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
                        This project was completed as a team of 3 for a class project in our Search Engine and Text Retreval course. 
                        The project has features for collecting documents, indexing documents, searching, model training, and link prediction.
                        Collecting documents uses Python requests and BeautifulSoup 4 to crawl and scrape the web. The index funtion creates an inverted index to map
                        between words and the documents they appear. The search function uses soundex, the inverted index created previously, and a TF-IDF Vectorizer to
                        determine the cosine similarity between each vector that represents the query and each document. The similarities found by the TF-IDF Vectorizer
                        are used to rank the documents accordingly and return the top 3 documents.
                    </p>
                    {/* <Button href={project.link} text='View on GitHub'/> */}
                </div>

            </main>
        </>
        )
}