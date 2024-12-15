import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Experiencedata } from "../Data/experienceData";
function Experience(){

      useEffect(()=>{
                Aos.init({duration:2000});
        
            },[]);
    return <div className="pt-10  mt-10" id="experience">
        <div className="text-center font-bold text-5xl mb-10 text-Brightsun-400">Experience</div>
         
            <div className="grid grid-cols-1 items-center  md:grid-cols-2 lg:grid-cols-2 gap-4 px-5">
           
            <div>
{/* {
    College.map((college,index)=>
<div class="mt-2">

        <div class='flex flex-col gap-5 items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full  mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
<div class='w-full flex items-center justify-between'>
<div class='flex items-center justify-center px-2 md:px-6'>
    <img class='w-16 h-16 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block' src={`${college.image}.png`} alt="" />
    <div class='text-left '>
        <h4 class='text-lg md:text-2xl lg:text-xl w-full ease-in-out duration-1000'><span class='text-red-500'>{college.Institute}</span></h4>
        <h4 class='text-sm md:text-base font-medium dark:text-gray-200'>{college.Course}</h4>
    </div>
</div>
<div class='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
    <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>{college.from} - {college.to} </p>
    <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>{college.Address}</p>
</div>
</div>

</div>
    

</div>
    )
} */}
<div data-aos="zoom-out-up">
    <img src="experience2.png" className="" alt='data'></img>
</div>

</div>


            <div className="" data-aos="zoom-out-down">
            {
    Experiencedata.map((exp,index)=>

<div class="">
<div class='flex flex-col gap-5 items-center justify-between bg-white dark:bg-gray-800 shadow-md  text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full  mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>

        <div className="flex flex-col mb-5 "><div class='w-full flex items-center  justify-between'>
            <div class='flex items-center justify-center px-2 md:px-6'>
                <img class='w-16 h-16 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block' src={`${exp.image}.png`}alt="data" />
                <div class='text-left '>
                    <h4 class='text-lg md:text-2xl lg:text-3xl ease-in-out duration-1000 uppercase'><span class='text-red-500'>{exp.Name}</span></h4>
                    <h4 class='text-sm md:text-base font-medium dark:text-gray-200'>{exp.role}</h4>
                </div>
            </div>
            <div class='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>{exp.from} - {exp.to} </p>
                <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>{exp.Address}</p>
            </div>
        </div><div class='text-left p-2'>
                <p class='text-sm lg:text-base text-gray-600 dark:text-gray-400 pb-4'>{exp.Responsibility}</p>
            
            </div></div>
    

</div>
</div>
    )
}

</div>



            </div>


        </div>
}
export default Experience;