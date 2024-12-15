import { Link } from "react-router-dom";

function ViewAll(){
    return(
        <Link to="/allproject"   className="inline-flex items-center p-3 -mt-5 animate-bounce float-right mx-5 hover:cursor-pointer bg-Brightsun-400 text-white rounded-md mb-20  transition-all duration-300 hover:bg-Brightsun-500 hover:scale-110">
        <span>View All Projects</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.293 9.293a1 1 0 010 1.414L8.414 14H16a1 1 0 110 2H8.414l3.879 3.879a1 1 0 11-1.414 1.414l-5.657-5.657a1 1 0 010-1.414l5.657-5.657a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
    </Link>

    );

}
export default ViewAll;