import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";

const BodyComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 py-12 md:py-20 md:px-16 text-gray-800 font-sans">
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
            Start your path in coding and competitive programming.
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
            <FaCheckCircle className="text-green-500 mr-2" />
            Estimated Duration: 3 months
          </li>
        </ul>

        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition">
          Try 7-Days Free Trial
        </button>

        <p className="text-sm text-gray-600">
          Watch 10+ lectures and solve problems for free
        </p>

        <div className="flex items-center space-x-4 mt-2">
          <div className="flex -space-x-2">
            <img src="../assets/img1.ong" alt="student1" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="/avatar2.png" alt="student2" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="/avatar3.png" alt="student3" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
          <div className="text-sm text-gray-700">
            5000+ Students <span className="text-yellow-500 inline-block ml-1"><FaStar /></span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg transform -translate-x-6 -translate-y-6">
          150+ Asked Interview Questions
        </div>
        <div className="absolute top-16 right-0 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg transform translate-x-6">
          120+ Conceptual Videos
        </div>
        <img
          src="/your-girl-image.png"
          alt="Student with laptop"
          className="w-full max-w-sm rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default BodyComponent;
