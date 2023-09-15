import React from "react";
import '../src/App.css'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import requests from "./Request";
import MovieCard from "./MovieCard";

const MoviesContainer = () => {
    const [moviesDetails, setMoviesDetails] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(requests.requestPopular)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setMoviesDetails(data.results.slice(0, 10));
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    console.log(moviesDetails)
   

  return (
    <section className="py-5 px-3% md:px-10% sm:px-5%  container">
      <div className="flex justify-between items-center">
        <h1 className="text-5 md:text-6">Featured Movies</h1>

        <Link to='' className="text-#BE123C/700 text-4">See More <i className="fa fa-chevron-right"></i></Link>
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