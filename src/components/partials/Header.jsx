import React from 'react';
import { Link } from 'react-router-dom';

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover'
      }}
      className="w-full h-[50vh] flex flex-col justify-end item-start p-[10%]"
    >
      <h1 className="text-5xl font-black text-white w-[70%]">{ <span>{data.name || data.original_title || data.title || data.original_name}
        </span>}</h1>
        <p className="w-[70%] mt-3 mb-3 text-white">
            {data.overview.slice(0,200)} ..<Link className="text-blue-400">more</Link>
        </p>
        <p className="text-white">
      <i class =" text-yellow-599 i-megaphone-fill"></i>{
        " "
      }{data.release_date}
      <i class="ml-5 text-yellow-599 ri-album-fill"></i>{" "}{data.media_type.toUpperCase()}
        </p>
        <Link className="bg-[#6556CD] p-4 rounded text-white  mt-5 w-[15%]">{" "}Watch Trailer

        </Link>
    </div>
  );
}

export default Header;
