import React, { useState } from "react";
import { Link } from "react-router-dom";
import favouritelike from "../src/assets/imgs/Favorite.png"
import unfavouritelike from "../src/assets/imgs/Unfavorite.png"

const MovieCard = ({ movie }) => {
  const [favourite, setFavourite] = useState(false);

  function handleFavourite() {
    setFavourite((prevFavourite) => !prevFavourite);
  }

  const like = favourite
    ? favouritelike
    : unfavouritelike;

  return (
    <Link  className="box" data-testid="movie-card">
      <div className="w-full relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
          className="w-full h-full relative"
          data-testid="movie-poster"
        />
        <img
          onClick={handleFavourite}
          src={like}
          alt=""
          className="absolute right-4 top-4 cursor-pointer"
        />
      </div>

      <div>
        <p className="text-12px text-#9CA3AF my-2" data-testid="movie-release-date">
          {movie?.release_date}
        </p>

        <h1 className="font-18px text-#111827 mb-2" data-testid="movie-title">
          {movie?.title}
        </h1>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img src="../src/assets/imgs/IMDb.png" alt="" />{" "}
            <p className="text-12px ml-2">86.0 / 100</p>
          </div>
          <div className="flex items-center">
            <img src="../src/assets/imgs/fruit.png" alt="" />{" "}
            <p className="text-12px ml-2">97%</p>
          </div>
        </div>

        <p className="text-12px text-#9CA3AF">Action, Adventure, Horror</p>
      </div>
    </Link>
  );
};

export default MovieCard;
