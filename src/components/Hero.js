import FirstImg from '../assets/hero.png'

export default function Hero() {
    const config  = {
        subtitle: 'Explore the varoius opportunity here',
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col py-4'>
            <h1 className=' text-black text-6xl font-hero-font'><span className='d py-6'>Virtual Healthcare Workshops</span><br/>Innovating the Future of Health
                <p className='text-2xl text-blue-800 py-4'>{config.subtitle}</p>
            </h1>
            
       </div>
       <img className='md:w-1/3 imgg' src={FirstImg} />
    </section>
}
