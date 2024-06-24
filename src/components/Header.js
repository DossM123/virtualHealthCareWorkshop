import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Headers(){
    const [toggleMenu, setToggleMenu]  = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-primary ">
        <a className="font-bold pc-nav" href="#">Healthcare Workshop</a>
        <nav className="hidden md:block">
            <ul className="flex text-black ">
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#workshops">Workshops</a></li>
                <li><a href="/#">Contact</a></li>
                <li><a href="/#">Login</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden mobile-nav">
            <ul className="flex flex-col text-black  mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Workshops</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className="text-blue-500 h-6"/></button>

        
    </header>
}