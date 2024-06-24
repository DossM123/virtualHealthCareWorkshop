import AboutUs from '../assets/about.png';
export default function About(){
    const config = {
        line1: "We envision a future where healthcare is seamlessly integrated with advanced technology, enhancing patient care, improving outcomes",
        line2:"Making quality healthcare accessible to everyone, everywhere. Our workshop is a step towards realizing this vision by fostering collaboration, innovation, and continuous learning.",
        line3: "Our workshop offers a unique blend of expert-led sessions, interactive workshops, and real-world case studies."
    }
   
    return <section className='flex flex-col md:flex-row bg-primary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutUs} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-black'>
                <h1 className='text-4xl border-b-4 mb-5 w-[170px] font-bold lines'>About Us</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}