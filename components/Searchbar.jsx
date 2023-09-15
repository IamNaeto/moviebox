import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = "420ea1ce6b91149d335150a115e26337";
    const BASE_URL = "https://api.themoviedb.org/3";
    const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w185"; // Adjust image size as needed

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            setShowResults(false);
            return;
        }

        setLoading(true);
        setError(null);

        const searchUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`;

        axios.get(searchUrl)
            .then((response) => {
                const movies = response.data.results.slice(0, 5); // Limit to the top 5 results
                setResults(movies);
                setShowResults(true);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [query]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="relative md:w-full">
            <input
                className=" w-full bg-transparent rounded-1 p-3 text-white text:2 md:text-4 border-2 border-solid border-white placeholder-white outline-none"
                type="search"
                placeholder="What do you want to watch?"
                onChange={handleInputChange}
                value={query}
            />
            <i className="fa fa-search absolute top-4 md:top-2 right-3 z-10 cursor-pointer text-white text-3 md:text-6"></i>

            {/* Separate div for the loading text */}
            {loading && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <p>Loading...</p>
                </div>
            )}

            {error && <p>Error: {error.message}</p>}
            {showResults && !loading && !error && (
                <div className="absolute mt-2 w-full bg-white border border-[#D1D5DB] rounded-md shadow-md">
                    <ul>
                        {results.map((movie) => (
                            <li key={movie?.id} className="flex items-center p-2 border-b">
                                <Link to={`/movie/${movie?.id}`}>
                                    <img
                                        src={`${POSTER_BASE_URL}${movie?.poster_path}`}
                                        alt={movie?.title}
                                        className="w-10 h-10"
                                    />
                                    <p className="text-black ml-2">{movie?.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Searchbar;
