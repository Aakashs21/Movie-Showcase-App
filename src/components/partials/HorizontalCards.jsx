import React from 'react';

function HorizontalCards({ data }) {
  return (
    <div className="w-full h-[50vh] p-8 horizontal-scroll-container scrollbar-hide">
      <div className="w-full flex h-[45vh] overflow-x-auto overflow-y-hidden">
        {data.map((d, i) => (
          <div key={i} className="mb-5 min-w-[15%] mr-5 h-full flex flex-col">
            <img 
              src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`} 
              alt={d.title || d.name || d.original_name || d.original_title} 
              className="w-full h-[200px] object-cover" 
            />
            <h1 className="mt-2 text-xl font-black text-white">
              {d.name || d.original_title || d.title || d.original_name}
            </h1>
            <p className="mt-1 text-sm text-white w-full overflow-hidden overflow-ellipsis">
              {d.overview ? `${d.overview.slice(0, 100)}...` : ''} <span className="text-blue-400">more</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
