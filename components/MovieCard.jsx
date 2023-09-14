import React, { useState } from "react";
import favouritelike from "../src/assets/imgs/Favorite.png"
import unfavouritelike from "../src/assets/imgs/Unfavorite.png"
import IMDbPNG from "../src/assets/imgs/IMDb.png"
import fruit from "../src/assets/imgs/fruit.png"
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const [favourite, setFavourite] = useState(false);

  function handleFavourite() {
    setFavourite((prevFavourite) => !prevFavourite);
  }

  const like = favourite
    ? favouritelike
    : unfavouritelike;

  return (
    <section className="box" data-testid="movie-card">
      <div className="w-full relative">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          loading="lazy" 
          alt=""
          className="w-full h-full relative"
          data-testid="movie-poster"
        />
        </Link>
        <img
          onClick={handleFavourite}
          src={like}
          alt=""
          className="absolute right-4 top-4 cursor-pointer"
        />
      </div>

      <div>
        <p className="text-3 text-#9CA3AF my-2" data-testid="movie-release-date">
          {movie?.release_date}
        </p>

        <h1 className="text-4 md:text-5 text-#111827 mb-2" data-testid="movie-title">
          {movie?.title}
        </h1>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img src={IMDbPNG} alt="" />{" "}
            <p className="text-2 md:text-3 ml-1 md:ml-2">86.0 / 100</p>
          </div>
          <div className="flex items-center">
            <img src={fruit} alt="" />{" "}
            <p className="text-2 md:text-3 ml-1 md:ml-2">97%</p>
          </div>
        </div>

        <p className="text-3 text-#9CA3AF">Action, Adventure, Horror</p>
      </div>
    </section>
  );
};

export default MovieCard;
