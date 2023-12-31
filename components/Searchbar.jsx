import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    let search, icon
  
      if (location.pathname === '/') {
        search = `w-full bg-transparent rounded-1 p-3 text:2 md:text-4 border-2 border-solid outline-none ${isScrolled ? 'text-black border-black placeholder-black' : 'text-white border-white placeholder-white '}`;
        icon = `fa fa-search absolute top-4 md:top-2 right-3 z-10 cursor-pointer text-3 md:text-6 ${isScrolled ? 'text-black' : 'text-white'}`
      } else if (location.pathname === '/moremovies') {
        search = `w-full bg-transparent rounded-1 p-3 text:2 md:text-4 border-2 border-solid outline-none text-black border-black placeholder-black`;
        icon = `fa fa-search absolute top-4 md:top-2 right-3 z-10 cursor-pointer text-3 md:text-6 text-black'}`
      }

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
                className={search}
                type="search"
                placeholder="What do you want to watch?"
                onChange={handleInputChange}
                value={query}
            />
            <i className={icon}></i>

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
                                <Link to={`/movies/${movie?.id}`}>
                                    {movie.poster_path ?
                                    <img
                                        src={`${POSTER_BASE_URL}${movie?.poster_path}`}
                                        alt={movie?.title}
                                        className="w-10 h-10"
                                    />
                                    : <div className='text-4 text-center animate-bounce duration-500'>No Image Found</div>
                                    }
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
