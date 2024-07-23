import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Topnav() {

    const [query,setquery]=useState("")


  return (
    <div className="max-w-full h-[10vh] relative flex justify-start items-center ml-[20%]">
      <i className="text-3xl text-zinc-400 ri-search-2-line"></i>
      <input
        onChange={(e)=>setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length>0&&
      <i  onclick={()=>(setquery(""))} className="text-zinc-400 text-3xl ri-close-fill"></i>}
      <div className="absolute w-[50%] max-h-[50vh] rounded  bg-red-100 top-[90%] overflow-auto">
        {/* <Link
          className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10 flex justify-start items-center border-b-2 border-zinc-100 w-[100%]"
          to="#"
        >
          <img src="" alt="" />
          <span>Hello everyone</span>
        </Link>
        

        <Link
          className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10 flex justify-start items-center border-b-2 border-zinc-100 w-[100%]"
          to="#"
        >
          <img src="" alt="" />
          <span>Hello everyone</span>
        </Link>
        <Link
          className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10 flex justify-start items-center border-b-2 border-zinc-100 w-[100%]"
          to="#"
        >
          <img src="" alt="" />
          <span>Hello everyone</span>
        </Link>
        <Link
          className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10 flex justify-start items-center border-b-2 border-zinc-100 w-[100%]"
          to="#"
        >
          <img src="" alt="" />
          <span>Hello everyone</span>
        </Link>
        <Link
          className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10 flex justify-start items-center border-b-2 border-zinc-100 w-[100%]"
          to="#"
        >
          <img src="" alt="" />
          <span>Hello everyone</span>
        </Link> */}
      </div>
    </div>
  );
}

export default Topnav;
