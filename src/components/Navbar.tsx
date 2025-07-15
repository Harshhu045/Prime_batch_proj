// import React from 'react';
// // import { HiArrowCircleDown } from 'react-icons/hi';
// // import { HiArrowCircleUp } from 'react-icons/hi';
// const Navbar = () => {
//     return (
//         <div className="flex justify-around p-3 m-3 text-center items-center">
//             <div><img src="https://programmingpathshala.com/_next/static/media/PpaLogo.d30bfdd2.svg" alt="" /></div>
//             <div className="flex justify-center gap-4 items-center">
//                 <p className="text-lg text-gray-700">Explore courses</p>
//                 <p>Success stories</p>
//                 <p>Blogs</p>
//                 <p>Events</p>
//             </div>
//             <div className="flex justify-center items-center">
//                 <button>Log in</button>
//                 <button>Start free Trial</button>
//             </div>
//         </div>
//     )
import { useState } from 'react';
import { ArrowDown } from './vectors/ArrowDown';
import { ArrowUp } from './vectors/ArrowUp';
const Navbar = () => {
    const [click, setClick] = useState(false);
    return (
        <div className="flex justify-around p-3 m-3 text-center items-center">
            <div className='cursor-pointer'><img src="https://programmingpathshala.com/_next/static/media/PpaLogo.d30bfdd2.svg" alt="" /></div>
            <div className="flex justify-ce nter gap-6 items-center">
                <div className='relative group inline-block'>
                    <p
                        className="text-lg text-gray-700 cursor-pointer flex items-center gap-1.5"
                        onClick={() => setClick(!click)}
                    >
                        Explore courses
                        <span className='transition-transform'>
                            <span className='block group-hover:hidden'>
                                <ArrowDown />
                            </span>
                            <span className='hidden group-hover:block'>
                                <ArrowUp />
                            </span>
                        </span>
                    </p>
                    <div className="absolute w-96 top-full left-0 mt-1 bg-white shadow-lg p-3 rounded hidden group-hover:block z-10 text-left">
                        <p className="hover:bg-hoverbg hover:text-white font-semibold p-2 rounded ">Become SSE and crack design rounds</p>
                        <p className="hover:bg-hoverbg hover:text-white font-semibold p-2 rounded">Crack coding rounds in DSA!</p>
                        <p className="hover:bg-hoverbg hover:text-white font-semibold p-2 rounded">Become Java Spring Boot Backend Developer</p>

                    </div>
                </div>
                <p className="text-lg text-gray-700 cursor-pointer">Success stories</p>
                <p className="text-lg text-gray-700 cursor-pointer">Blogs</p>
                <p className="text-lg text-gray-700 cursor-pointer">Events</p>
            </div>
            <div className="flex justify-center items-center gap-4">
                <button className='w-20 h-8 bg-buttobg rounded hover:scale-105 transition-all font-semibold cursor-pointer'>Log in</button>
                <button className="bg-gradient-to-b from-indigo-600 to-cyan-500 text-white font-semibold py-2 px-5 rounded hover:scale-105 transition-all">
                    Start Free Trial
                </button>
            </div>
        </div>
    )
}
export default Navbar


