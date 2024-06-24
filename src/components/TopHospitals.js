import Apollo from '../assets/Apollo.png';
import Sunshine from '../assets/sunshine.png';
export default function TopHospitals() {

    return <section id='hospitals' className="flex  flex-col py-20 px-5 justify-center bg-secondary text-black">
    <div className="w-full">
        <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl border-b-4 mb-5 w-[150px] font-bold lines">Hospitals Clients</h1>
        </div>
    </div>
    <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5 rows'>
        <marquee behaviour = "scroll"  direction="left" className="Marqueee">
        <img className='md:w-1/4 imgg' src={Apollo} />
        <img className='md:w-1/4 imgg' src={Sunshine} />
        <img className='md:w-1/4 imgg'  src={Apollo} />
        <img className='md:w-1/4 imgg' src={Sunshine} />
        </marquee>
        </div>
    </div>
</section>


   /* return <section className='flex flex-col justify-between'>
        <marquee behaviour = "left" className="Marqueee">
        <img className='md:w-1/4 imgg' src={Apollo} /><img className='md:w-1/4 imgg' src={Sunshine} />
        </marquee>
    </section>
    <h1 className='text-4xl border-b-4 mb-5 w-[170px] font-bold lines'>About Us</h1>*/
}