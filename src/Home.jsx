import './App.css'
import { Link } from 'react-router-dom'
import tv from "./assets/imgs/tv.png"
import menu from "./assets/imgs/Menu.png"
import IMDb from "./assets/imgs/IMDb.png"
import fruit from "./assets/imgs/fruit.png"
import requests from '../components/Request'
import { useState } from 'react'
import { useEffect } from 'react'

function Home() {

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
        <div className='w-full bg-cover bg-center h-screen bg-gradient-to-r from-black to-gray-400 ' loading="lazy" style={backgroundStyle}>
          <header className='flex items-center justify-between w-full px-3 py-4 md:px-5% md:py-5 text-white'>
            <Link to="/" className='flex items-center text-white'>
              <img src={tv} alt="logo" className='mr-2 w-10 md:w-15'/>
              <h2 className='text-5 md:text-6'>MovieBox</h2>
            </Link>

            <div className='relative flex  md:w-50%'>
              <input
                className='w-full bg-transparent rounded-1 p-3 text-white border-2 border-solid border-white placeholder-white outline-none hidden md:block'
                type="search"
                placeholder='What do you want to watch?'
              />
              <i className='fa fa-search absolute self-center right-3 z-24 cursor-pointer'></i>
            </div>


            <div className='flex justify-between items-center'>
              <Link to="" className='text-white text-4 signin'>Sign In</Link>
              <Link to="" className='ml-2'>
              <img src={menu} alt="menu" className=''/>
              </Link>
            </div>
          </header>


          <section className='ml-3 md:ml-5% text-white w-95% md:w-full mt-20'>
            <h1 className='text-10 md:text-12'>{movie?.title}</h1>

            <div className='flex my-3 text-4 w-full'>
              <div className='flex mr-8'>
                <img src={IMDb} alt="" className='mr-2'/> <p>86.0 / 100</p>
              </div>

              <div className='flex'>
                <img src={fruit} alt=""className='mr-2'/> <p>97%</p>
              </div>
            </div>

            <p className='my-8 pr-4 text-4'>{truncateString(movie?.overview, 200)}</p>

            <Link to="" className='text-white py-2 px-5 rounded-1 bg-#BE123C hover:bg-red-500 transition'><i className="fa fa-play-circle"></i>  WATCH TRAILER</Link>
          </section>
        </div>
  )
}

export default Home
