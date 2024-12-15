import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function AboutMe()
{
        useEffect(()=>{
            Aos.init({duration:2000});
    
        },[]);
  return  <div id="aboutme">
    <div className="text-center font-bold text-5xl mb-10 text-Brightsun-400">About Me</div>
    <section class="pt-10 overflow-hidden flex justify-center items-center dark:bg-gray-900 md:pt-0 sm:pt-16 2xl:pt-16">
        
        <div class="mx-auto sm:px-6 lg:px-8 w-full">
            <div class="flex flex-col sm:flex-row justify-around items-center w-full ">


                <div class="text-center items-center sm:text-left " data-aos="zoom-in">
                    <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-4xl">
                        Hey 👋 I am <br class="block sm:hidden" /> Ramakanta Gahan
                    </h2>
                    <p className="max-w-lg mt-3 text-xl  leading-relaxed text-justify text-gray-600 dark:text-gray-300 md:mt-8">
                        I am a passionate Software Developer focused on creating innovative and
                        user-centered solutions. With 1.5 years of experience in Software Development,
                        I thrive on turning ideas into functional, beautiful designs and seamless experiences.
                        I believe in continuous learning and always strive to stay ahead of trends.
                        When I’m not working, I enjoy travelling and learning new things.
                        Feel free to reach out if you’d like to collaborate or learn more about my work—I’d love to connect!
                    </p>
                </div>


                <div class="relative mt-8 sm:mt-0 "  data-aos="zoom-in-up">
                    <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
                    <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="boy1.png" alt="Ramakanta Gahan" />
                </div>

            </div>
        </div>
    </section>
</div>


}
export default AboutMe;