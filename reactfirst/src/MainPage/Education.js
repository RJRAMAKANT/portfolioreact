import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { College } from "../Data/experienceData";
function Education(){
         useEffect(()=>{
                    Aos.init({duration:2000});
            
                },[]);

    return <div className="pt-10  mt-10" id="education">
        <div className="text-center font-bold text-5xl mb-10 text-Brightsun-400">Education</div>
         
            <div className="grid grid-cols-1 items-center  md:grid-cols-1 lg:grid-cols-2 gap-4 px-5">
           
           


            <div className="" data-aos="fade-right">
            {
    College.map((college,index)=>
<div className="mt-2 transform transition-transform duration-500 hover:scale-105 hover:cursor-pointer group">

        <div class='flex flex-col   gap-5 items-center justify-between bg-white dark:bg-gray-800 shadow-md  text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full  mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4 group-hover:bg-Brightsun-400/20'>
<div class='w-full flex items-center justify-between'>
<div class='flex items-center justify-center px-2 md:px-6'>
    <img class='w-16 h-16 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block' src={`${college.image}.png`} alt="data" />
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
}

</div>
<div>

<div data-aos="fade-left">
    <img src="edu1.png" className="" alt='data'></img>
</div>

</div>



            </div>


        </div>

}
export default Education;