import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { achievements } from "../Data/experienceData";
function Achievements() {
       useEffect(()=>{
                            Aos.init({duration:2000});
                    
                        },[]);
    return (
        <div className="mt-20" id="achievements">
            {/* Title Section */}
            
            
            <div className="flex flex-col w-full lg:flex-row gap-10 px-4">
                {/* Left Section: Textual Content */}
                <div className="flex-1" data-aos="zoom-in-down">
                    <div className="font-bold text-Brightsun-400 font-serif mb-5 text-3xl text-center">
                        Achievements
                    </div>
                    <div className=" text-gray-800 text-2xl dark:text-gray-200 font-serif">
                        Putting quantified achievements on a resume is great, but I just don’t work with hard numbers.
                        I have no data to support the quality of my work. If you have lots of relevant experience, 
                        the heading statement of your resume will be a summary.
                    </div>
                </div>

                {/* Right Section: List of Colleges */}
                <div className="flex-1" data-aos="fade-left">
                    {achievements.map((college, index) => (
                        <div
                            key={index}
                            className="mt-2 transform transition-transform duration-500 hover:scale-105 hover:cursor-pointer group"
                        >
                            <div className="flex flex-col gap-5 items-center justify-between bg-white dark:bg-gray-800 shadow-md text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4 group-hover:bg-Brightsun-400/20">
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center justify-center px-2 md:px-6">
                                        <img
                                            className="w-16 h-16 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block"
                                            src={`${college.image}.png`}
                                            alt={college.Institute}
                                        />
                                        <div className="text-left">
                                            <h4 className="text-lg md:text-2xl lg:text-xl w-full ease-in-out duration-1000">
                                                <span className="text-red-500">{college.Institute}</span>
                                            </h4>
                                            <h4 className="text-sm md:text-base font-medium dark:text-gray-200">
                                                {college.certificate}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500">
                                        <p className="text-sm md:text-base text-gray-800 dark:text-gray-200">
                                            {college.from} - {college.to}
                                        </p>
                                        <p className="text-sm md:text-base text-gray-800 dark:text-gray-200">
                                            {college.Address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Achievements;
