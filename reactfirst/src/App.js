import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AllProjects from './AllProjects/AllProjects';
import './App.css';
import Header2 from './Header/Header2';
import Loaders from './MainPage/Loaders';
import MainPages from './MainPage/MainPages';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or initial setup
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 3 seconds (or until data is fetched)

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loaders className='h-full w-full' />;  // Show loader while content is loading
  }
  
  return (
 <Router>
 


    <div className="relative min-h-screen bg-slate-200 dark:bg-gray-900 area overflow-hidden">
        {/* <div className='position fixed top-[35%] right-0  flex flex-col gap-10'> 
          <a href=''><div><IconBrandLinkedinFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" /><span className='hidden'>Linked in</span></div></a>
          <a href=''><IconBrandGithubFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" /></a>
          <a href=''><IconBrandInstagramFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" /></a>
          <a href=''><IconBrandYoutubeFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" /></a>
          <a href=''><IconBrandXFilled className="h-10 w-10 text-Brightsun-400 hover:cursor-pointer hover:animate-spin-slow" /></a>

        </div> */}
      
        	<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

      
      {/* <AboutMe/>
      <Experience/>
      <Education/>
      <Language/>
      <Projects/>
      <ViewAll/>
      <Achievements/>
      <ContactMe/> */}
      
      {/* <AllFile/> */}
      <Routes>
        
        <Route path="allproject" element={<AllProjects/>} />
        <Route path="/" element={<MainPages/>} />
        <Route path="mainpage" element={<MainPages/>} />
      </Routes>
     
      <div className='text-center text-gray-900 mt-10 dark:text-Brightsun-400 mb-5 font-bold'>Copyright ©2024 All rights reserved | This Portfolio is made by @RJ RAMAKANT</div>
    </div>
    <div className="fixed top-0 left-0  z-50  shadow-md">
               
               <Header2 />
           </div>
    </Router>
  );
}

export default App;

