import React from "react";
import '../src/App.css'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import requests from "./Request";
import MovieCard from "./MovieCard";

const MoviesContainer = () => {
    const location = useLocation();
    const [moviesDetails, setMoviesDetails] = useState([])
    const [loading, setLoading] = useState(true);

    let section, url, text, icon;
  
      if (location.pathname === '/') {
        section = `px-3% md:px-10% sm:px-5% pt-10 pb-5 container`
        url = "/moremovies";
        text = "See More";
        icon = "fa fa-chevron-right ${} ml-2"
      } else if (location.pathname === '/moremovies') {
        section = `pt-40 pb-5 px-3% md:px-10% sm:px-5% md:pt-35 md:pb-15 container`
        url = "/";
        text = "See Less";
        icon = "fa fa-chevron-left ${} ml-2"
      }


    useEffect(() => {
      let startSlice, endSlice;
  
      if (location.pathname === '/') {
        startSlice = 0;
        endSlice = 12;
      } else if (location.pathname === '/moremovies') {
        startSlice = 12;
        endSlice = 20;
      }
  
      fetch(requests.requestTrending)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          setMoviesDetails(data.results.slice(startSlice, endSlice));
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, [location.pathname]);
  

    // console.log(moviesDetails)
   

  return (
    <section className={section}>
      <div className="flex justify-between items-center">
        <h1 className="text-5 md:text-6">Featured Movies</h1>

        <Link to={url} className="text-#BE123C/700 text-4 flex items-center">{text}<i className={icon}></i></Link>
      </div>


      <div className="container w-full mt-6 ">
      {loading ? (
                <p className='text-xl text-center animate-ping duration-500'>Loading...</p>
            ) : (
                
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {moviesDetails.map((item, id) => (
            <MovieCard key={id} movie={item} />
          ))}
        </div>
    )}
      </div>
    </section>
  );
};

export default MoviesContainer;