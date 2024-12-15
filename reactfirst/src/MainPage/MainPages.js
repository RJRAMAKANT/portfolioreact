import { IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled, IconBrandXFilled, IconBrandYoutubeFilled, IconContract, IconDownload } from '@tabler/icons-react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import AboutMe from './AboutMe';
import Achievements from './Achievements';
import ContactMe from './ContactMe';
import Education from './Education';
import Experience from './Expeience';
import Language from './Language';
import Projects from './Projects';
import RotatingItem from "./RotatingItem";
import ViewAll from './ViewAll';


function MainPages() {
    useEffect(()=>{
        Aos.init({duration:2000});

    },[]);
    return (
        <>
        <div className="min-h-screen w-full flex items-center justify-center relative"id='mainpage'>
            {/* Header Section */}
            {/* <div className="fixed top-0 left-0  z-50  shadow-md">
               
                <Header2 />
            </div> */}

            {/* Main Content */}
            <div className="flex items-center justify-center flex-wrap px-6 py-10 sm:px-12 lg:px-24 w-full">
                {/* Left Section (Text, Typewriter, and Social Icons) */}
                <div className="text-gray-900 dark:text-gray-300 font-mono font-semibold flex flex-col justify-center items-center w-full sm:w-[80%] lg:w-1/2 text-center sm:text-left mb-10 lg:mb-0"  data-aos="fade-right">
                    <div className="text-xl font-serif sm:text-xl lg:text-3xl mb-2">
                        Hello! I am Ramakanta Gahan
                    </div>
                    <div className="text-xl font-serif sm:text-xl lg:text-3xl mb-4">
                        and I am a FullStack Software Developer.
                    </div>

                    {/* Typewriter Section */}
                    <div className="text-3xl text-Brightsun-400 sm:text-3xl lg:text-5xl mb-6">
                        <Typewriter
                            options={{
                                strings: ['I Code Websites', 'Android Developer', 'Backend Developer', 'Competitive Coder'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-10 p-5">
                        <a href="Ramakanta Gahan Exp Res.pdf" download className="w-50 rounded-md p-3  focus:animate-none hover:animate-none border border-Brightsun-400 backdrop-blur-md hover:bg-Brightsun-500 transition-all duration-500 ease-in-out hover:cursor-pointer flex items-center space-x-2">
                            <IconDownload stroke={2.0} className="w-5 h-5 text-black dark:text-white" />
                            <span className="text-black dark:text-white">Resume</span>
                        </a>
                        <a href="#contactme" className="w-50 rounded-md p-3 border flex items-center space-x-2  focus:animate-none hover:animate-none border-Brightsun-400 backdrop-blur-md hover:bg-Brightsun-500 transition-all duration-500 ease-in-out hover:cursor-pointer">
                            
                            <IconContract stroke={2.0} className="w-5 h-5 text-black dark:text-white" />
                            <span className="text-black dark:text-white">Hire Me</span>
                                
                                
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className=" gap-8   flex-wrap justify-center sm:gap-10 md:gap-15 hidden sm:flex">
                        <a href='https://www.linkedin.com/in/ramakanta-gahan-ba8852215/'><IconBrandLinkedinFilled className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 text-Brightsun-400 hover:cursor-pointer animate-bounce focus:animate-none  " /></a>
                        <a href='https://github.com/RJRAMAKANT'><IconBrandGithubFilled className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 text-Brightsun-400 hover:cursor-pointer animate-bounce focus:animate-none " /></a>
                        <a href='https://www.instagram.com/_code_island/'><IconBrandInstagramFilled className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 text-Brightsun-400 hover:cursor-pointer animate-bounce focus:animate-none " /></a>
                        <a href='https://www.youtube.com/channel/UCKyxk3n5bQg9OL-zZdOTGkQ'><IconBrandYoutubeFilled className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 text-Brightsun-400 hover:cursor-pointer animate-bounce focus:animate-none " /></a>
                        <a href='https://x.com/rj_ramakant'><IconBrandXFilled className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 text-Brightsun-400 hover:cursor-pointer animate-bounce focus:animate-none " /></a>
                    </div>
                </div>

                {/* Right Section (RotatingItem Component) */}
                <div className="w-full sm:w-[80%] lg:w-1/2"  data-aos="fade-left">
                    <RotatingItem className="" />
                </div>
            </div>


        </div>
        
      <AboutMe/>
      <Experience/>
      <Education/>
      <Language/>
      <Projects/>
      <ViewAll/>
      <Achievements/>
      <ContactMe/>
        </>
    );
}

export default MainPages;
