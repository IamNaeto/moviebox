import './App.css'
import { Link } from 'react-router-dom'
import tv from "./assets/imgs/tv.png"
import menu from "./assets/imgs/Menu.png"
import IMDb from "./assets/imgs/IMDb.png"
import fruit from "./assets/imgs/fruit.png"
import requests from '../components/Request'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {

  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    fetch(requests.requestTrending)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
          setMovies(data.results.slice(0, 10));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

  const truncateString = (str, num) => {
      if(str?.length > num) {
          return str.slice(0, num) + '...'
      } else{
          return str
      }
  }


  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
  }
  return (
        <div className='w-full bg-cover bg-center h-screen bg-gradient-to-r from-black to-gray-400' style={backgroundStyle}>
          <header className='header flex items-center justify-between w-full px-5% py-20px text-white'>
            <Link to="/" className='flex items-center text-white'>
              <img src={tv} alt="logo" className='mr-10px logo'/>
              <h2 className='logoname text-24px'>MovieBox</h2>
            </Link>

            <div className='relative flex w-50%'>
              <input
                className='searchbar w-full bg-transparent rounded-2 p-2 text-white border-white placeholder-white outline-none'
                type="search"
                placeholder='What do you want to watch?'
              />
              <i class="fa fa-search" aria-hidden="true" className='absolute self-center right-2 z-24'></i>
            </div>


            <div className='flex items-center auth'>
              <Link to="" className='text-white font-16px signin'>Sign In</Link>
              <Link to="" className='ml-10px'>
              <img src={menu} alt="menu" className='menuicon'/>
              </Link>
            </div>
          </header>


          <section className='herosec ml-5% text-white w-sm mt-20'>
            <h1 className='text-48px'>{movie?.title}</h1>

            <div className='w-sm flex my-3 text-12px w-full icons'>
              <div className='flex mr-8'>
                <img src={IMDb} alt="" className='mr-2'/> <p>86.0 / 100</p>
              </div>

              <div className='flex'>
                <img src={fruit} alt=""className='mr-2'/> <p>97%</p>
              </div>
            </div>

            <p className='my-8 text-14px overview'>{truncateString(movie?.overview, 200)}</p>

            <Link to="" className='text-white py-2 px-5 rounded-1 bg-#BE123C hover:bg-red-500 transition'><i class="fa fa-play-circle"></i>  WATCH TRAILER</Link>
          </section>
        </div>
  )
}

export default App
