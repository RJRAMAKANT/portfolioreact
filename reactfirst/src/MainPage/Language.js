import Marquee from "react-fast-marquee";
import { programming } from "../Data/experienceData";
function Language(){
    return<div className="mt-20" id="skills">
        
    <div className="font-bold text-Brightsun-400 font-serif  mb-10 text-4xl  text-center pb-5 ">Developement Languages</div>
    <Marquee pauseOnHover>
    {
        programming.map((company, index) => (
            <div
                key={index}
                className="mx-8 mt-20  w-3/4 flex flex-col items-center justify-center px-5 py-5 text-center mb-10 bg-gray-800 dark:hover:bg-Brightsun-400/20 rounded-xl cursor-pointer hover:text-white group transform transition-transform duration-300 hover:scale-150"
            >
                <img className="h-16 mb-3" src={`${company}.png`} alt={company} />
                <div className="uppercase text-center text-Brightsun-400  font-semibold font-serif dark:group-hover:text-white">
                    {company}
                </div>
            </div>
        ))
    }
</Marquee>


</div>

}
export default Language;