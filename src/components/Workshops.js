import workshop1 from '../assets/workshop1.jpg';
import workshop2 from '../assets/workshop2.jpeg';
import workshop3 from '../assets/workshop3.jpg';
export default function Workshop(){
    const config = {
        projects : [
            {
                image: workshop1,
                description: 'Seminar on Hospital Projects',
                link: 'https://github.com/DossM123/eco-solutions-website.git'
            },
            {
                image: workshop2,
                description: 'Global conference for legislature and professionals',
                link: 'https://github.com/DossM123/Job-Freak-website-clone.git'
            },
            {
                image: workshop3,
                description: '3rd International Conference',
                link: 'https://github.com/DossM123/portfolio.git'
            }
        ]
    }

    return <section id='workshops' className="flex  flex-col py-20 px-5 justify-center bg-secondary text-black">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 mb-5 w-[150px] font-bold lines">Upcoming Workshops</h1>
                <p>These are some of my best projects. I have built these when i started learning things. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
    
}