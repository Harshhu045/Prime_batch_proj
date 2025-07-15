import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import girlWithLaptop from "../assets/girlwithlaptop.png";

const BodyComponent = () => {
  return (
    <div className="relative bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 md:py-20 text-gray-800">

        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Data Structures &<br /> Algorithms Essentials
          </h1>

          <p className="text-lg text-gray-600">
            The only DSA Course you need to be able to ace your next coding interview.
          </p>

          <ul className="space-y-2 text-gray-700 text-base">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Start your path in Coding and competitive programming.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Ace your next DSA interview.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Beginner Friendly.
            </li>
            <li className="flex items-center">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              Estimated Duration: 3 months
            </li>
          </ul>
          <button className="bg-gradient-to-b from-indigo-600 to-cyan-500 text-white font-semibold py-389px px-56px rounded hover:scale-105 transition-all">
            Try 7-Days Free Trial
          </button>

          <p className="text-sm text-gray-600">
            Watch 10+ lectures and solve problems for free
          </p>

          <div className="flex items-center space-x-4 mt-2">
            <div className="flex -space-x-2">
              <img src="../assets/avatar1.png" alt="student1" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="../assets/avatar2.png" alt="student2" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="../assets/avatar3.png" alt="student3" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="../assets/avatar4.png" alt="student4" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="../assets/avatar5.png" alt="student5" className="w-8 h-8 rounded-full border-2 border-white" />
            </div>
            <div className="text-sm text-gray-700">
              5000+ Students <br></br><FaStar className="inline-block text-yellow-500 ml-1" />
              <FaStar className="inline-block text-yellow-500 ml-1" />
              <FaStar className="inline-block text-yellow-500 ml-1" />
              <FaStar className="inline-block text-yellow-500 ml-1" />
              <FaStar className="inline-block text-yellow-500 ml-1" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center items-center z-10">
          {/* Background shapes */}
          <div className="absolute w-[500px] h-[500px] bg-[#2E3192] rotate-[40deg] top-0 -right-40 z-0"></div>
          <div className="absolute w-[200px] h-[200px] bg-[#FBAA1A] rotate-45 bottom-0 right-10 z-0"></div>

          {/* Floating Labels */}
          <div
            className="absolute z-20 bg-green-600 bg-blue-500 text-white text-xs font-semibold flex items-center justify-center shadow-lg border-2"
            style={{
              width: "137px",
              height: "137px",
              top: "30px",
              left: "258px",
              borderRadius: "128px",
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          >
             <span className="text-base font-bold">150+</span><br>
            <span className="text-[10px] mt-1 leading-tight">Asked DSA<br />Interview Questions</span>
          </div>
          <div className="absolute top-20 right-0 z-20 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            120+ Conceptual Videos
          </div>

          {/* Girl Image */}
         <img
  src={girlWithLaptop}
  alt="Student with laptop"
  className="absolute z-10 object-contain"
  style={{
    width: "548px",
    height: "627px",
    top: "149px",
    left: "111px",
     transform: "scaleX(-1)",
    opacity: 1,
  }}
/>

        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
