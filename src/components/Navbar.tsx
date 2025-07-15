import { HiArrowCircleDown } from 'react-icons/hi';
import { HiArrowCircleUp } from 'react-icons/hi';
const Navbar = () => {
  return (
    <div className="flex justify-around p-3 m-3 text-center items-center">
        <div><img src="https://programmingpathshala.com/_next/static/media/PpaLogo.d30bfdd2.svg" alt="" /></div>
        <div className="flex justify-center gap-6 items-center">
            <p className="text-lg text-gray-700 cursor-pointer">Explore courses<span></span></p>
            <p className="text-lg text-gray-700 cursor-pointer">Success stories</p>
            <p className="text-lg text-gray-700 cursor-pointer">Blogs</p>
            <p className="text-lg text-gray-700 cursor-pointer">Events</p>
        </div>
        <div className="flex justify-center items-center gap-4">
            <button className='w-20 h-8 bg-buttobg rounded hover:scale-105 cursor-pointer'>Log in</button>
            <button className='w-28 h-8 bg-buttobg rounded hover:scale-105 cursor-pointer'>Start free Trial</button>
        </div>
    </div>
  )
}

export default Navbar


