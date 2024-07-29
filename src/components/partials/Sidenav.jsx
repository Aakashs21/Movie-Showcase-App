import React from 'react';

import { Link } from 'react-router-dom';



function Sidenav() {

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="ri-tv-2-fill text-[#6556CD] mr-3"></i>
        <span>MS APP</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl ">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
         <i class="ri-fire-fill mr-1"></i>
         Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
         <i class="ri-bard-fill mr-2"></i>
          Popular
        </Link>
        <Link to="/movies" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
         <i class="ri-movie-fill mr-2"></i>
          Movies
        </Link>
        <Link to="/tv-shows" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
         <i class="ri-tv-line mr-2"></i>
         TV Shows
        </Link>
        <Link to="/people" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
         <i class="ri-team-fill mr-2"></i>
         People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400" />

      <nav className="flex flex-col text-zinc-400 text-xl ">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">Website Info</h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
        <i class="ri-information-2-fill mr-2"></i>
         About Us
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
        <i class="ri-mail-fill mr-2"></i>
          Contact Us
        </Link>
      
      </nav>

    </div>
  );
}

export default Sidenav;
