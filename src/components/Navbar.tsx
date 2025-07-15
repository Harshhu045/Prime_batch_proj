// import { HiArrowCircleDown } from 'react-icons/hi';
// import { HiArrowCircleUp } from 'react-icons/hi';
const Navbar = () => {
  return (
    <div className="flex justify-around p-3 m-3 text-center items-center">
      <div><img src="https://programmingpathshala.com/_next/static/media/PpaLogo.d30bfdd2.svg" alt="" /></div>
      <div className="flex justify-center gap-4 items-center">
        <p className="text-lg text-gray-700">Explore courses</p>
        <p>Success stories</p>
        <p>Blogs</p>
        <p>Events</p>
      </div>
      <div className="flex justify-center items-center">
        <button>Log in</button>
        <button>Start free Trial</button>
      </div>
    </div>
  )
}
export default Navbar


