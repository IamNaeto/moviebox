import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../src/App.css"
import { Link } from 'react-router-dom'
import tv from "../src/assets/imgs/tv.png"
import Home from "../src/assets/imgs/Home.png"
import TVShow from "../src/assets/imgs/TV Show.png"
import MovieProjector from "../src/assets/imgs/Movie Projector.png"
import Calender from "../src/assets/imgs/Calendar.png"
import Logout from "../src/assets/imgs/Logout.png"
import Star from "../src/assets/imgs/Star.png"
import Tickets from "../src/assets/imgs/Two Tickets.png"
import ListBlack from "../src/assets/imgs/ListBlack.png"
import ListWhite from "../src/assets/imgs/ListWhite.png"
import BestMovies from "../src/assets/imgs/BestMovies.png"

const Movies = () => {

  // My API key for themoviedb.org
const key = "420ea1ce6b91149d335150a115e26337";

 // Extract the "id" parameter from the URL using useParams
 const { id } = useParams();

 // Define state variables to store movie details and loading state
 const [movie, setMovie] = useState({});
 const [loading, setLoading] = useState(true);
 const [sideBar, setSideBar] = useState(false);


//  Handle the side bar active state
  function handleSideBar() {
    setSideBar((prevSideBar) => !prevSideBar);
  }

  const activeClass = sideBar ? 'block' : 'hidden';
 
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Make an API request to fetch movie d
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
        );
        setMovie(response.data);

        // Set the movie details in the state and mark loading as complete
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        // Handle errors, if any, and mark loading as complete
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);
  console.log(movie);
  


  // Function to format movie runtime in hours and minutes
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  // Function to format movie release date to a UTC format
  const formatReleaseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toUTCString();
  };

    return ( 
        <main className="w-100%  md:flex-row flex flex-col">
            <div className={`absolute md:relative md:block bg-white h-screen rounded-tr-10 rounded-br-10 border border-gray-600 border-solid z-1 w-50% md:w-20% mr-5 ${activeClass}`}  >
            <Link to="/" className='flex items-center mt-3 mb-2 p-5%  text-gray-600 '>
              <img src={tv} alt="logo" className='mr-10px'/>
              <h2 className='text-5'>MovieBox</h2>
            </Link>

            <Link to="/" className='flex items-center text-black p-10%   text-gray-600 transition-colors hover:text-#be123c hover:bg-#be123c1a'>
              <img src={Home} alt="logo" className='mr-10px'/>
              <h2 className='text-5'>Home</h2>
            </Link>

            <Link to="" className='flex items-center text-black p-10%  text-#666 bg-#BE123C1A border-r-4 border-r-solid border-r-#be123c'>
              <img src={MovieProjector} alt="logo" className='mr-10px'/>
              <h2 className='text-5 text-#BE123C'>Movies</h2>
            </Link>

            <Link to="" className='flex items-center text-black p-10% text-gray-600 transition-colors hover:text-#be123c hover:bg-#be123c1a'>
              <img src={TVShow} alt="logo" className='mr-10px'/>
              <h2 className='text-5'>TV Series</h2>
            </Link>

            <Link to="" className='flex items-center text-black p-10% text-20  text-gray-600 transition-colors hover:text-#be123c hover:bg-#be123c1a'>
              <img src={Calender} alt="logo" className='mr-10px'/>
              <h2 className='text-5'>Upcoming</h2>
            </Link>

            <div className="mx-10% my-1 px-5% py-3% border border-#BE123CB2 border-solid flex flex-col items-center bg-#F8E7EB66 rounded-2">
                <div>
                <p className="text-4">Play movie quizes and earn free tickets</p>
                <p className="text-3 my-2">50k people are playing now</p>
                </div>

                <p className="text-#BE123C p-1.5 rounded-4 border-1 border-solid cursor-pointer transition-colors hover:text-white hover:bg-#be123c"><b>Start playing</b></p>
            </div>

            <Link to="/" className='flex items-center text-black p-5%  text-gray-600 transition-colors hover:text-#be123c hover:bg-#be123c1a'>
              <img src={Logout} alt="logo" className='mr-10px'/>
              <h2 className='text-5'>Log out</h2>
            </Link>

            </div>

            <section className="w-full md:w-80% mt-5 md:mr-4 h-screen">
            <div className="md:hidden w-full flex items-end justify-end pr-6 mb-3">
            <i className=" fa fa-bars text-#B91C1C text-7 flex ml-auto cursor-pointer" onClick={handleSideBar}></i>
            </div>
            {/* Movie details */}
          {loading ? (
            <p>Loading...</p>
          ) : (
              // Display movie details once loading is complete
                <div className="w-full relative px-4 md:py-none">
                    <div className="w-full relative ">
                        <img 
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        alt={movie?.title}
                        loading="lazy" 
                        className="w-full h-50 md:h-100 rounded-4"/>

              <div className="absolute  top-0 right-0 w-full h-60 md:h-[300px] lg:h-[449px] rounded-xl overflow-hidden flex justify-center  items-center  ">
                    <i className="fa fa-youtube-play hover-text-#B91C1C text-white motion-safe:animate-pulse  duration-500 cursor-pointer  text-7xl"></i>
                </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center mx-4">
                        <div className="flex items-center text-3 md:text-4 gap-none md:gap-1 mt-2">
                        <p data-testid="movie-title">{movie?.title}</p>
                        <p>•</p>
                        <p data-testid="movie-release-date">{formatReleaseDate(movie?.release_date)}</p>
                        <p>•</p>
                        <p>PG-13</p>
                        <p>•</p>
                        <p data-testid="movie-runtime">{formatRuntime(movie?.runtime)}</p>
                        
                        </div>

                        <div className="flex items-center justify-between gap-2 text-3 lg:text-4">
                          <div className="flex gap-1 ">
                          <p className="text-#B91C1C ml-4 p-2 lg:px-4 lg:py-2 border-2 border-solid border-#F8E7EB border-rounded-8">Action</p>
                          <p className=" text-#B91C1C p-2 lg:px-4 lg:py-2 border-2 border-solid border-#F8E7EB border-rounded-8">Drama</p>
                          </div>

                            <img src={Star} alt="" className="w-5 md:w-8"/>
                            <p className="text-#E8E8E8">8.5</p>
                            <p> | 350k</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between m-4 gap-2">
                    <p data-testid="movie-overview" className="w-full md:w-65% text-3.5 md:text-4.5">{movie?.overview}</p>

                    <div className="w-full md:w-35% flex flex-col">
                      <button className="w-full text-4 mb-2 bg-#BE123C text-white p-2 border-#BE123C outline-none border-rounded-2 flex items-center justify-center space-x-2 cursor-pointer transition-colors hover:text-#be123c hover:bg-#be123c1a hover:border-#be123c1a"><img src={Tickets} alt="" /> <span>See Showtimes</span></button>
                      <button className="w-full text-4 bg-#BE123C1A text-black p-2 border-#BE123C1A outline-none border-rounded-2 flex items-center justify-center space-x-2 cursor-pointer transition-colors hover:text-white hover:bg-#be123c hover:border-#be123c"> <img src={ListBlack} alt="" /> <span>More watch options</span></button>
                    </div>
                    </div>

                    <div className="mx-4 flex flex-col md:flex-row">
                      <div className="w-full md:w-65% text-3 md:text-4.5">
                        <p className="mb-4">Director : <span className="text-#BE123C">Joseph Kosinski</span></p>
                        <p className="mb-4">Writers : <span className="text-#BE123C">Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
                        <p className="mb-4">Stars : <span className="text-#BE123C"> Tom Cruise, Jennifer Connelly, Miles Teller</span></p>

                        <div className="flex items-center">
                          <button className="w-50% md:w-40% text-3 md:text-4 mb-2 bg-#BE123C border-#BE123C  text-white p-3  outline-none rounded-tl-2 rounded-bl-2  flex items-center justify-center space-x-2">Top rated movie #65</button>
                          <select name="" id="" className="w-50% md:w-40% text-3 md:text-4 mb-2 p-3 outline-none rounded-tr-2 rounded-br-2 border-#C7C7C7">
                            <option value="">Awards 9 nominations</option>
                          </select>
                        </div>
                      </div>

                      <div className="relative w-full md:w-35% h-50">
                        <img src={BestMovies} alt="" className="w-full h-50" />
                        <div className="absolute bottom-0 rounded-b-2 left-0 right-0 p-3 bg-#12121280 text-white flex items-center">
                          <img src={ListWhite} alt="" />
                          <p className="text-3 md:text-4">The Best Movies and Shows in September</p>
                        </div>
                      </div>

                    </div>

                </div>

                )}
            </section>
        </main>
     );
}
 
export default Movies;