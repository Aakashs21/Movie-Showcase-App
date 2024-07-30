import React, { useEffect, useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';

function Home() {
  document.title = "MS App | Webpage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [filter, setFilter] = useState('all');

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getHeaderWallpaper();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTrending = trending.filter(item => 
    filter === 'all' || item.media_type === filter
  );

  return wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <div className="flex justify-between items-center p-8">
          <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>
          <select value={filter} onChange={handleFilterChange} className="p-2 rounded">
            <option value="all">All</option>
            <option value="tv">TV</option>
            <option value="movie">Movie</option>
          </select>
        </div>
        <HorizontalCards data={filteredTrending} />
      </div>
    </>
  ) : (
    <h1>Loading..</h1>
  );
}

export default Home;
