import React from "react";
import '../src/App.css'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import requests from "./Request";
import MovieCard from "./MovieCard";

const Movies = () => {
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
    <section className="py-20px px-10% container">
      <div className="flex justify-between items-center">
        <h1>Featured Movies</h1>

        <Link to='' >See More</Link>
      </div>


      <div className="container w-full mt-6 ">
      {loading ? (
                <p className='text-2xl text-center '>Loading...</p>
            ) : (
                
        <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-4">
          {moviesDetails.map((item, id) => (
            <MovieCard key={id} movie={item} />
          ))}
        </div>
    )}
      </div>
    </section>
  );
};

export default Movies