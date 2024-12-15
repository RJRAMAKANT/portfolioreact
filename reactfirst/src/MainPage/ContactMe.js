import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
function ContactMe(){
     useEffect(()=>{
                              Aos.init({duration:2000});
                      
                          },[]);
    return<div class="font-[sans-serif] max-w-6xl mx-auto relative rounded-lg py-6 pt-10  mt-20" id="contactme"  >
    <div class="grid lg:grid-cols-3 items-center">
      <div class="grid sm:grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
        <div data-aos="fade-left" class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7  fill-Brightsun-400" viewBox="0 0 512 512">
            <path d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z" data-original="#000000"></path>
            <path d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" data-original="#000000"></path>
          </svg>
          <h4 class="text-gray-800 text-base font-bold mt-4">Visit Address</h4>
          <p class="text-sm text-gray-600 mt-2"> Banglore, India</p>
        </div>
        <div data-aos="fade-right" class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 fill-Brightsun-400" viewBox="0 0 473.806 473.806">
            <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z" data-original="#000000"></path>
          </svg>
          <h4 class="text-gray-800 text-base font-bold mt-4">Call Me</h4>
          <p class="text-sm text-gray-600 mt-2">+91 7751975616</p>
        </div>
        <div data-aos="fade-left" class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 fill-Brightsun-400" viewBox="0 0 32 32">
            <path d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z" data-original="#000000"></path>
            <path d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" data-original="#000000"></path>
          </svg>
          <h4 class="text-gray-800 text-base font-bold mt-4">Chat</h4>
          <p class="text-sm text-gray-600 mt-2 hover:text-Brightsun-400 hover:font-semibold"><a href="mailto:ramakantagahan8458@outlook.com">Send email</a></p>
          
        </div>
        <div data-aos="fade-right" class="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 fill-Brightsun-400" viewBox="0 0 100 100">
            <path d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z" data-original="#000000"></path>
          </svg>
          <h4 class="text-gray-800 text-base font-bold mt-4">Youtube</h4>
          <a href="https://www.youtube.com/channel/UCKyxk3n5bQg9OL-zZdOTGkQ" class="text-sm hover:text-Brightsun-400 text-gray-600 mt-2">Code island</a>
        </div>
      </div>

      <div data-aos="flip-left" class="lg:col-span-2 dark:bg-gray-900 dark:border-Brightsun-400 dark:rounded-3xl  hover:bg-Brightsun-600 hover:bg-opacity-80 transition-all duration-500 ease-in-out hover:cursor-pointer  dark:border-8 bg-Brightsun-400 bg-opacity-50 rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
        <h2 class="text-3xl text-white text-center font-bold mb-6">Contact Me</h2>
        <form action="https://formspree.io/f/xrgwzvdv"method="POST">
          <div class="max-w-md mx-auto space-y-3">
            <input type='text' placeholder='Name' name="uname"
              class="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
            <input type='email' placeholder='Email' name="umail"
              class="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
            <input type='text' placeholder='Subject' name="usub"
              class="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
            <textarea placeholder='Message' rows="6" name="umsg"
              class="w-full bg-gray-100 rounded-lg px-6 text-sm pt-3 outline-none"></textarea>
            <input type='submit' value="Send Message" class="text-gray-800 w-full relative bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg text-sm px-6 py-3 !mt-6"/>
              
       
          </div>
        </form>
      </div>
    </div>
     
    <div className=" gap-10 mt-10 justify-center flex">
  {/* LinkedIn Icon */}
  <a href="https://www.linkedin.com/in/ramakanta-gahan-ba8852215/" className="social-icon">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current text-blue-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.225 0H1.775C.796 0 0 .795 0 1.775v20.45C0 23.205.796 24 1.775 24h20.45c.98 0 1.775-.795 1.775-1.775V1.775C24 .795 23.205 0 22.225 0zM7.348 20.451H3.676v-12h3.672v12zm-1.84-13.75a2.138 2.138 0 1 1 0-4.275 2.138 2.138 0 0 1 0 4.275zm13.368 13.75h-3.672v-6.5c0-1.55-.02-3.55-2.165-3.55-2.18 0-2.52 2.34-2.52 3.55v6.5h-3.673v-12h3.524v1.7h.05c.47-.89 1.61-1.83 3.287-1.83 3.51 0 4.14 2.31 4.14 5.32v6.81z"/>
    </svg>
  </a>

  {/* GitHub Icon */}
  <a href="https://github.com/RJRAMAKANT" className="social-icon">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current text-gray-800" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.398.6.111.828-.261.828-.578v-2.17c-3.338.725-4.04-1.607-4.04-1.607-.547-1.39-1.333-1.759-1.333-1.759-1.087-.743.083-.727.083-.727 1.204.084 1.84 1.238 1.84 1.238 1.07 1.833 2.805 1.303 3.48.998.107-.777.418-1.303.761-1.603-2.665-.298-5.467-1.332-5.467-5.923 0-1.308.47-2.377 1.24-3.218-.124-.3-.537-.892.12-1.485 0 0 1.007-.324 3.251 1.243 1.94-.537 3.99-.537 5.926 0 2.244-1.567 3.249-1.243 3.249-1.243.659.593.243 1.184.12 1.485.77.841 1.24 1.91 1.24 3.218 0 4.602-2.81 5.623-5.473 5.923.43.361.824 1.073.824 2.164v3.092c0 .319.226.694.832.578 4.769-1.598 8.206-6.095 8.206-11.398 0-6.627-5.373-12-12-12z"/>
    </svg>
  </a>

  {/* X (Twitter) Icon */}
  <a href="https://x.com/rj_ramakant" className="social-icon">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current text-black" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.643 4.937c-.883.391-1.83.654-2.828.774a4.847 4.847 0 0 0 2.14-2.678c-.951.564-2.002.973-3.127 1.193a4.799 4.799 0 0 0-8.184 4.364c-4.008-.199-7.564-2.118-9.95-5.033a4.72 4.72 0 0 0-.648 2.409c0 1.664.849 3.129 2.135 3.988a4.763 4.763 0 0 1-2.166-.598v.06c0 2.329 1.653 4.271 3.854 4.71a4.812 4.812 0 0 1-2.16.081c.61 1.888 2.387 3.262 4.494 3.299a9.641 9.641 0 0 1-5.968 2.055c-.39 0-.781-.023-1.17-.07a13.62 13.62 0 0 0 7.399 2.168c8.86 0 13.75-7.342 13.75-13.733 0-.209-.007-.419-.02-.628a9.57 9.57 0 0 0 2.342-2.448z"/>
    </svg>
  </a>

  {/* Instagram Icon */}
  <a href="https://www.instagram.com/_code_island/" className="social-icon">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current text-pink-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.308 0H7.692C3.448 0 0 3.448 0 7.692v8.616C0 20.552 3.448 24 7.692 24h8.616c4.244 0 7.692-3.448 7.692-7.692v-8.616C24 3.448 20.552 0 16.308 0zM12 17.308a5.308 5.308 0 1 1 0-10.616 5.308 5.308 0 0 1 0 10.616zm6.692-6.346a1.38 1.38 0 1 1 0-2.758 1.38 1.38 0 0 1 0 2.758z"/>
    </svg>
  </a>

  {/* YouTube Icon */}
  <a href="https://www.youtube.com" className="social-icon">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current text-red-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186c-.276-1.02-1.022-1.794-1.976-2.071C19.307 3.658 12 3.658 12 3.658s-7.307 0-9.522.457c-.954.277-1.7 1.051-1.976 2.071C0 7.629 0 12 0 12s0 4.372.502 5.814c.276 1.02 1.022 1.794 1.976 2.071 2.215.457 9.522.457 9.522.457s7.307 0 9.522-.457c.954-.277 1.7-1.051 1.976-2.071.502-1.442.502-5.184.502-5.184s0-3.553-.502-5.814zM9.547 15.835v-7.68l6.58 3.84-6.58 3.84z"/>
    </svg>
  </a>
</div>






  </div>
}
export default ContactMe;