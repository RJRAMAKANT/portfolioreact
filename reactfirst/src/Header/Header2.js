import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header2() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className="text-center">
        <button
          className="text-white bg-Brightsun-400 hover:bg-Brightsun-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-Brightsun-400 dark:hover:bg-Brightsun-600 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={toggleDrawer}
        >
          <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </button>
      </div>

      <div
        id="drawer-navigation"
        className={`fixed top-1 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-100 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label "
      >
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-600 uppercase dark:text-gray-300">
          Ramakanta Gahan
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto hover:text-white hover:cursor-pointer">
          <ul className="space-y-2 font-medium">
           
            <li>
              <Link to="/"
               
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-Brightsun-400 dark:hover:bg-Brightsun-400 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <a
                href="#aboutme"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-Brightsun-400 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">About Me</span>
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-Brightsun-400 group"
              >
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Experience</span>
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-Brightsun-400 group"
              >
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 2l6 3v4h2v6h-3v4H5v-4H2v-6h2V5l6-3zm0 4l4 2v2H6V6l4-2z" />
</svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Education</span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-Brightsun-400 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-9.184 9.182c-.126.094-.265.169-.402.246l-1.426-.545a2.334 2.334 0 0 1-.975-.575A2.302 2.302 0 0 1 3 9.87V6.418l-1-1v4.45c0 .698.354 1.344.955 1.722.119.084.251.15.387.221l-.467 1.427c-1.16-.854-1.86-2.25-1.86-3.7 0-2.722 2.226-4.948 4.95-4.948 2.697 0 4.896 2.192 4.898 4.91 0 1.446-.563 2.88-1.577 3.951-.57-.801-1.28-1.507-2.08-2.109-.075-.054-.15-.107-.228-.158-.697-.37-1.48-.539-2.29-.539a4.732 4.732 0 0 0-3.309 1.367l.7.72a3.77 3.77 0 0 1 5.355-.021c1.08-1.04 1.784-2.564 1.784-4.017a6.732 6.732 0 0 0-1.579-4.014l-2.865 2.865a6.694 6.694 0 0 0-.114 9.519c-.145.181-.314.348-.493.514l-4.104-.048z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Skills</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-Brightsun-400 group"
              >
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-Brightsun-400 group"
              >
                      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M15 0H5a2 2 0 0 0-2 2v3H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2v5a2 2 0 0 0 2 2v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a2 2 0 0 0 2-2v-5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2V5a2 2 0 0 0-2-2V2a2 2 0 0 0-2-2zm-6 2h2v2H9V2zM4 5h12v3H4V5zm12 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3h12v3z" />
</svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Achievements</span>
              </a>
            </li>
            <li>
              <a
                href="#contactme"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-Brightsun-400 group"
              >
                 <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Contact Me</span>
              </a>
            </li>
            <li>
              <a
                href="Ramakanta Gahan Exp Res.pdf" download
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-Brightsun-400 group"
              >
                    <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header2;