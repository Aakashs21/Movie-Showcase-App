import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { Link } from 'react-router-dom';
import noimage from '../../../public/noimage.png';

function Topnav() {
  const [query, setquery] = useState("");
  const [serches, setserches] = useState([]);

  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setserches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    if (query) {
      GetSerches();
    } else {
      setserches([]);
    }
  }, [query]);

  return (
    <div className="max-w-full h-[10vh] relative flex justify-start items-center ml-[20%]">
      <i className="text-3xl text-zinc-400 ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i onClick={() => setquery("")} className="text-zinc-400 text-3xl ri-close-fill"></i>
      )}
      <div className="absolute w-[50%] max-h-[50vh] rounded bg-red-100 top-[90%] overflow-auto">
        {serches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10 flex justify-start items-center border-b-2 border-zinc-100 w-[100%]"
            to="#"
          >
            <img
              className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow large'
              src={s.backdrop_path || s.profile_path
                ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                : noimage}
              alt=""
            />
            <span>{s.name || s.original_title || s.title || s.original_name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;